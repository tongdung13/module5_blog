import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenAuthService } from './token-auth.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private tokenAuthService: TokenAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const jwtHeaderToken = this.tokenAuthService.getJwtToken();
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer" + jwtHeaderToken
      }
    });
    return next.handle(request);
  }
}
