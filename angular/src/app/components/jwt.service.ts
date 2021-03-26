import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  _isLoggedIn: boolean = false;
  constructor(private http: HttpClient) { }

  isLogged(): boolean {
    return this._isLoggedIn;
  }

  signUp(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/register', data);
  }

  show(id: any) {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(environment.apiUrl + `/user/show/${id}`, { headers: reqHeader });
  }

  updateUser(id: any, data: any) {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.put(environment.apiUrl + `/user/edit/${id}`, data, { headers: reqHeader });
  }

  signIn(user: User): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/signin', user);
  }

  getAll() {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(environment.apiUrl + '/user', { headers: reqHeader });
  }

  logout() {
    const token = localStorage.getItem('AccessToken');
    const headersRes = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(environment.apiUrl + '/auth/logout', null, { headers: headersRes });
  }

  showPublic(id: number) {
    return this.http.get(environment.apiUrl + `/users/show/${id}`);
  }

  changePassword(id: any, password: string, newPassword: string, newPasswordConfirm: string): Observable<any> {
    var data = {
      "password": password,
      "newPassword": newPassword,
      "newPasswordConfirm": newPasswordConfirm
    }
    console.log(data)
    return this.http.put(environment.apiUrl + `/auth/change-password/${id}`, data)
  }
}
