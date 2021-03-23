import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  getUser()
  {
    return this.http.get(environment.apiUrl + `/users`);
  }

  showUser (id: number)
  {
    return this.http.get(environment.apiUrl + `/users/show/${id}`);
  }

  deleteUser(id: number)
  {
    return this.http.delete(environment.apiUrl + `/auth/delete/${id}`);
  }

  getBlog()
  {
    return this.http.get(environment.apiUrl + '/blog');
  }

  showBlog(id: number)
  {
    return this.http.get(environment.apiUrl + `/blog/show/${id}`);
  }

  deleteBlog(id: number)
  {
    return this.http.delete(environment.apiUrl + `/blog/destroy/${id}`);
  }

  
}
