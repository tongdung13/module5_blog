import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router,
              private loginService: AdminServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(value: any)
  {
    console.log(value);
    if (value.userName == 'admin' && value.password == '123456') {
      this.loginService.setLogin(true);
      this.router.navigate(['admin/userList']);
    }
  }
}
