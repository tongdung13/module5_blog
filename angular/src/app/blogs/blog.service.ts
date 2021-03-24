import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public _isLoggedIn!: boolean;

  constructor(private http: HttpClient) { }

  publicAll() {
    return this.http.get(environment.apiUrl + '/blog');
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
    return this.http.get(environment.apiUrl + '/blogs', { headers: reqHeader });
  }

  create(data: any) {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.post(environment.apiUrl + '/blogs', data, { headers: reqHeader });
  }

  edit(id: number, data: any) {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.put(environment.apiUrl + `/blogs/update/${id}`, data, { headers: reqHeader });
  }

  show(id: number) {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(environment.apiUrl + `/blogs/show/${id}`, { headers: reqHeader });
  }

  delete(id: number) {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.delete(environment.apiUrl + `/blogs/destroy/${id}`, { headers: reqHeader })
  }

  showPublic(id: number) {
    return this.http.get(environment.apiUrl + `/blog/show/${id}`);
  }

  isLogged(): boolean {
    return this._isLoggedIn;
  }

  setLogin(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }
}
