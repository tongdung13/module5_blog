import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationStateService } from 'src/app/components/authentication-state.service';
import { TokenAuthService } from 'src/app/components/token-auth.service';

import { JwtService } from 'src/app/components/jwt.service';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {


  isLoggedin!: boolean;

  constructor(
    private router: Router,
    private tokenAuthService: TokenAuthService,
    private state: AuthenticationStateService,
    private afAuth: JwtService,
    private toastrService: NotificationService
  ) { }


  ngOnInit(): void {
    this.state.userAuthState.subscribe(
      res => {
        this.isLoggedin = res;
        console.log(res);
      }
    )
  }

  logout()
  {
    this.state.setAuthState(false);
    this.tokenAuthService.destroyToken();
    this.router.navigate(['login']);
  }
}
