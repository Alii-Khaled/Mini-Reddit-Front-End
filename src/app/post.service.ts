import { Injectable } from '@angular/core';
import { PostsObjects } from './classes/posts-objects';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Communities } from './classes/community-info';
// import { post } from './classes/posts-objects';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  IsApi: boolean;
  BackEnd: string;

  constructor(private http: HttpClient) { }

  /**
     * Get all information needed in the database for the posts (id, comments, subscribed, ...)
     */
    GetPostsObjects(): Observable<PostsObjects[]> {
      return this.http.get<PostsObjects[]>('http://localhost:3000/posts');
  }

  updateUser(post: PostsObjects): Observable<PostsObjects> {
    return this.http.put<PostsObjects>('http://localhost:3000/posts' + post.post_id, post);
  }

  createUser(post: PostsObjects): Observable<PostsObjects> {
    return this.http.post<PostsObjects>('http://localhost:3000/posts', post);
  }

  getUserById(id: number): Observable<Communities> {
    return this.http.get<Communities>('http://localhost:3000/communities' + id);
  }

  // updatetry(post: PostsObjects): Observable<PostsObjects> {
  //   return this.http.put<PostsObjects>('http://localhost:3000/posts' + post.post_id, post);
  // }

  // createtry(post: PostsObjects): Observable<PostsObjects> {
  //   return this.http.post<PostsObjects>('http://localhost:3000/posts', post);
  // }

  // gettryById(id: number): Observable<Communities> {
  //   return this.http.get<Communities>('http://localhost:3000/communities' + id);
  // }

  hidePost(post_id: number): Observable<PostsObjects> {
    if (this.IsApi === false) {
        /**
         * From the mock server if "IsApi" is false
         * And from Api if it is true
         */
        return this.http.get<PostsObjects>('http://localhost:3000/single-post');
    } else {
        /**
         * Getting token from cookies
         */
        var token = localStorage.getItem('token');
        /**
         * Setting headers
         */
        const headers = new HttpHeaders ({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        // return this.http.get<any>('https://930d0c7c.ngrok.io/api/unauth/ViewPosts?username=' + username ,  {headers} );
        return this.http.get<any>(this.BackEnd + '/api/unauth/ViewPosts?username=' + post_id ,  {headers} );
    }
}
}
