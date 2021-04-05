import { Injectable } from '@angular/core';
import {HttpClient, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiPostComment = environment.apiUrl + '/comment/blog';
  private apiGetBlogComment = environment.apiUrl + '/comment/blog';

  constructor(
    private http: HttpClient,
  ) {
  }

  getComment(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiGetBlogComment}/${id}`);
  }

  postComment(id: number, comment: any): Observable<any> {
    return this.http.post(`${this.apiPostComment}/${id}`, comment );
  }
}
