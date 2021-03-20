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
    return this.http.post('http://127.0.0.1:8000/api/auth/register', data);
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

  signIn(user: User): Observable<any> {
    return this.http.post('http://localhost:8000/api/auth/signin', user);
  }
}
