import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = 'http://localhost:8000/api'
  constructor(private http: HttpClient) { }

  getAll()
  {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(API_URL + '/blog', {headers:reqHeader});
  }

  create(data: any){

    return this.http.post(`${this.baseUrl}/auth/store`, data);
  }

  edit(id: number ,data: any)
  {

    return this.http.put(`${this.baseUrl}/blog/update/${id}`, data);
  }

  show(id:number)
  {
    return this.http.get(API_URL + `/blog/show/${id}`)
  }

  delete(id: number)
  {
    return this.http.delete(`${this.baseUrl}/blog/destroy/${id}`)
  }
}
