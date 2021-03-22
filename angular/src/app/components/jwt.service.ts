import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  signUp(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/register', data);
  }

  profile(): Observable<any> {
    return this.http.get(environment.apiUrl + '/auth/user-profile');
  }

  show(id: any)
  {
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

  updateUser(id: any, data: any)
  {
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

  getAll()
  {
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

  delete(id: number)
  {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.delete(environment.apiUrl + `/user/destroy/${id}`, { headers: reqHeader });
  }

  destroyToken(data: any){
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.post(environment.apiUrl + '/auth/logout', data, { headers: reqHeader });
  }

  showPublic(id: number)
  {
    return this.http.get(environment.apiUrl + `/showPublic/${id}`);
  }
}
