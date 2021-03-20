import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenAuthService } from './token-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStateService {

  // @ts-ignore
  private userCurrentState = new BehaviorSubject<boolean>(this.tokenAuthService.isSignedin());
  userAuthState = this.userCurrentState.asObservable();

  constructor(
    private tokenAuthService: TokenAuthService
  ) { }

  setAuthState(value: boolean)
  {
    this.userCurrentState.next(value);
  }
}
