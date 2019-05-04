import { Injectable } from '@angular/core';
import { PostsObjects } from './classes/posts-objects';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { comments } from './classes/commentss';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  IsApi: boolean;

  constructor(private http: HttpClient) { }

  /**
     * Get all information needed in the database for the posts (id, comments, subscribed, ...)
     */
    GetPostsObjects(): Observable<PostsObjects[]> {
      return this.http.get<PostsObjects[]>('http://localhost:3000/posts');
  }

  getSinglePost(): Observable<PostsObjects[]> {
    return this.http.get<PostsObjects[]>('http://localhost:3000/posts');
  }

  removePost(link_id: number): Observable<any> {
    var token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        "Accept": "application/json",
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
    });

    const body = {
        "post_id": link_id
    };
    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        /**
         * From the mock server if "IsApi" is false
         * And from Api if it is true
         */
        return this.http.delete<PostsObjects[]>('http://localhost:3000/posts/' + link_id);

    }
    else {
        return this.http.post<PostsObjects[]>('http://35.204.169.121//api/auth/removeLink', body, { headers });

    }
  }

  getPosts(id: number): Observable<any[]> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        /**
         * From the mock server if "IsApi" is false
         * And from Api if it is true
         */
        return this.http.get<PostsObjects[]>('http://localhost:3000/posts');
    }
    else {
        return this.http.get<PostsObjects[]>('http://35.204.169.121/api/auth/viewPosts?post_id=' + id, { headers });

    }
  }

  savePost(link_id: number) {
    var token = localStorage.getItem('token');
    let headers = {
        "Accept": "application/json",
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
    }

    let body = {
        "link_id": link_id
    }
    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        return this.http.post("http://localhost:3000/posts", body, { headers })
    }
    else {
        // return this.http.post("https://930d0c7c.ngrok.io/api/auth/editCommunity", body, { headers })
        return this.http.post("http://35.204.169.121/api/auth/saveLink", body, { headers })
    }
  }

  unsavePost(link_id: number) {
    var token = localStorage.getItem('token');
    let headers = {
        "Accept": "application/json",
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
    }

    let body = {
        "link_id": link_id
    }
    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        return this.http.post("http://localhost:3000/posts", body, { headers })
    }
    else {
        // return this.http.post("https://930d0c7c.ngrok.io/api/auth/editCommunity", body, { headers })
        return this.http.post("http://35.204.169.121/api/auth/unsaveLink", body, { headers })
    }
  }

  // is not completed
  getHomePosts(page_type: number, username: string, community_id: number = null): Observable<comments> {

    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        /**
         * From the mock server if "IsApi" is false
         * And from Api if it is true
         */
        return this.http.get<comments>('http://localhost:3000/posts');

    }
    else {
        /*I hope this is the right way*/
        return this.http.get<comments>('http://35.204.169.121/api/unauth/ViewPosts?page_type=' + page_type 
        + '&username=' + username + '&community_id=' + community_id, { headers });
    }
  }

  // comments ///////////////////////////////////////////////////////////////////////////////////

  removeComment(link_id: number): Observable<any> {
    var token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        "Accept": "application/json",
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
    });

    const body = {
        "comment_id": link_id
    };
    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        /**
         * From the mock server if "IsApi" is false
         * And from Api if it is true
         */
        return this.http.delete<comments[]>('http://localhost:3000/commentss/' + link_id);

    }
    else {
        return this.http.post<comments[]>('http://35.204.169.121//api/auth/removeLink', body, { headers });

    }
  }

  // I cannot understand that very well and I am not sure
  getComments(id: number): Observable<comments> {

    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        /**
         * From the mock server if "IsApi" is false
         * And from Api if it is true
         */
        return this.http.get<comments>('http://localhost:3000/commentss/' + id);

    }
    else {
        /*get community info not now in backend*/
        return this.http.get<comments>('http://35.204.169.121/api/unauth/viewCommentsReplies?link_id=' + id, { headers });
    }
  }

  saveComment(link_id: number) {
    var token = localStorage.getItem('token');
    let headers = {
        "Accept": "application/json",
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
    }

    let body = {
        "link_id": link_id
    }
    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        return this.http.post("http://localhost:3000/commentss", body, { headers })
    }
    else {
        // return this.http.post("https://930d0c7c.ngrok.io/api/auth/editCommunity", body, { headers })
        return this.http.post("http://35.204.169.121/api/auth/saveLink", body, { headers })
    }
  }

  unsaveComment(link_id: number) {
    var token = localStorage.getItem('token');
    let headers = {
        "Accept": "application/json",
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
    }

    let body = {
        "link_id": link_id
    }
    /**
     * Choose from where i'll get my data
     */
    if (this.IsApi === false) {
        return this.http.post("http://localhost:3000/commentss", body, { headers })
    }
    else {
        // return this.http.post("https://930d0c7c.ngrok.io/api/auth/editCommunity", body, { headers })
        return this.http.post("http://35.204.169.121/api/auth/unsaveLink", body, { headers })
    }
  }

}
