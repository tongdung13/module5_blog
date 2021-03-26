import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/components/jwt.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  id: any;
  user: any;
  userLogin = false;
  users: any;
  constructor(
    private router: Router,
    private jwtService: JwtService,
    private toastrService: NotificationService
  ) { }


  ngOnInit(): void {
    this.userLogin = this.jwtService._isLoggedIn;
    console.log(this.userLogin);
    this.loadUser();
  }

  logOut() {
    this.jwtService.logout().subscribe(res => {
      localStorage.removeItem('AccessToken');
      localStorage.removeItem('user');
      this.userLogin = false;
      this.jwtService._isLoggedIn = false;
      this.router.navigate(['']);
      this.toastrService.showSuccess("You have successfully logged out !");
    });
  }

  loadUser() {
    this.id = localStorage.getItem('id');
    this.jwtService.show(this.id).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    );
  }
}
