import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../components/jwt.service';
import { BlogService } from './blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogGuard implements CanActivate {

  userLogin = false;
  constructor(
    private jwtService: JwtService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.userLogin = this.jwtService._isLoggedIn;
      if (!this.userLogin) {
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }

}
