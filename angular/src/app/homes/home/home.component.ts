import { Component, OnInit } from '@angular/core';
import { BlogService } from "../../blogs/blog.service";
import { Router } from "@angular/router";
import { JwtService } from 'src/app/components/jwt.service';
import { NotificationService } from 'src/app/service/notification.service';
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  filter: any;
  p: number = 1;
  id: any;
  users: any;
  user: any;
  userLogin = false;
  constructor(
    private service: BlogService,
    private router: Router,
    private jwtService: JwtService,
    private toastrService: NotificationService
  ) { }
  blogs: any;
  blog: any;
  // tslint:disable-next-line:typedef
  value: any;

  ngOnInit(): void {
    this.loadData();
    this.loadUser();
    this.userLogin = this.jwtService._isLoggedIn;
    console.log(this.userLogin)
  }

  loadData() {
    this.service.publicAll().subscribe(
      data => {
        this.blogs = data;
        console.log(data);
      }, error => console.log(error)
    );
  }

  loadUser() {
    this.id = localStorage.getItem('id');
    this.jwtService.show(this.id).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    )
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
}
