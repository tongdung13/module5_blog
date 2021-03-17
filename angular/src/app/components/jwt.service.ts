import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class User {
  // tslint:disable-next-line:ban-types
  name!: String;
  // tslint:disable-next-line:ban-types
  email!: String;
  // tslint:disable-next-line:ban-types
  password!: String;
  // tslint:disable-next-line:ban-types variable-name
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private baseUrl = 'http://127.0.0.1:8001/api/auth/login';
  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      email,
      password
    };
    return this.http.post(`${this.baseUrl}`, data, { headers: reqHeader, responseType: 'json' });
  }
  signUp(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }
  logIn(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8001/api/auth/login', user);
  }
  profile(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }
  // req-password-reset
  // tslint:disable-next-line:typedef
  reqPasswordReset(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/auth/req-password-reset', data);
  }
  // update password
  // tslint:disable-next-line:typedef
  updatePassword(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/auth/update-password', data);
  }
}
