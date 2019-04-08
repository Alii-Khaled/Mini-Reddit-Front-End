import { Injectable } from '@angular/core';
import { PostsObjects } from './classes/posts-objects';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  /**
     * get all information needed in the database for the posts (id, comments, subscribed, ...)
     */

    GetPostsObjects(): Observable<PostsObjects[]> {
      return this.http.get<PostsObjects[]>('http://localhost:3000/posts');
  }
}
