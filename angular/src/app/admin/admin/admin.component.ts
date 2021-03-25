import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private loginService: AdminServiceService,
    private router: Router,
    private toastrService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.loginService.isLogged();
    this.router.navigate(['admin/admin-login']);
    this.toastrService.showSuccess("Logged Out successfully")
  }
}
