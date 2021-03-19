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

  show(id: any)
  {
    return this.http.get(`http://localhost:8000/api/user/show/${id}`);
  }

  updateUser(id: any, data: any)
  {
    return this.http.put(environment.apiUrl + `/user/edit/${id}`, data);
  }

  signIn(user: User): Observable<any> {
    return this.http.post('http://localhost:8000/api/auth/signin', user);
  }

  getAll()
  {
    return this.http.get(environment.apiUrl + '/user');
  }


}
