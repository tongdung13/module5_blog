import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthService {

  private tokenIssuer = {
    login: 'http://localhost:8000/api/auth/signin',
    register: 'http://localhost:8000/api/auth/register'
  }

  constructor() { }

  setTokenStorage(token: any)
  {
    localStorage.setItem('auth_token', token);
  }

  getJwtToken()
  {
    return localStorage.getItem('auth_token');
  }

  // validate token
  // @ts-ignore
  validateToken()
  {
    const token = this.getJwtToken();
    
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.tokenIssuer).indexOf(payload.iss) > -1 ? true : false;
      }
    } else {
      return false;
    }
  }

  payload(token: any)
  {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  isSignedin()
  {
    return this.validateToken();
  }

  destroyToken()
  {
    localStorage.removeItem('auth_token');
  }
}
