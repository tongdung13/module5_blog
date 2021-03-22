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

  constructor(
    private router: Router,
    private afAuth: JwtService,
    private toastrService: NotificationService
  ) { }


  ngOnInit(): void {
  }

  logOut() {
    this.afAuth.destroyToken();
    this.router.navigate(['']);
    this.toastrService.showSuccess("You have successfully logged out !");
  }
}
