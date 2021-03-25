import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Like} from "./like";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private apiAddLikeToSong = environment.apiUrl + '/likedislike/blog';
  private apiGetLikeDislike = environment.apiUrl + '/likedislike/blog';
  private apiGetTop10Likes = environment.apiUrl + '/likedislike/blog/top/10';

  constructor(
    private http: HttpClient,
  ) { }

  getTop10Likes(): Observable<Like[]> {
    return this.http.get<Like[]>(this.apiGetTop10Likes);
  }

  getLikeDisLike(blog_id: number): Observable< any > {
    return this.http.get(`${this.apiGetLikeDislike}/${blog_id}`);
  }

  addLikeToSong(user_id: number, blog_id: number, likedislike: 'like' | 'dislike'): Observable<any> {
    // @ts-ignore
    return this.http.post(this.apiAddLikeToSong, {
      user_id: user_id,
      blog_id: blog_id,
      likedislike,
    });
  };
}

