import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from './blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogGuard implements CanActivate {

  constructor(
    private blogService: BlogService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.blogService.isLogged();
  }
  
}
