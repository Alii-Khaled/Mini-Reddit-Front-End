import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http: HttpClient) { }


  // to create new post
  addNewLink(post_content: string, parent_link_id: number, post_title: string, 
    community_id: number, image_path: string = '', video_url: string = ''): Observable<any> {

      // I don't know what is these !!!
    const headers = new HttpHeaders ({
        'Content-Type': 'application/json',
        Accept: 'application/json',
    });
    const post = {
        post_content,
        parent_link_id,
        post_title,
        community_id,
        image_path,
        video_url
    };

    return this.http.post('https://930d0c7c.ngrok.io/api/unauth/signIn', post, { headers });
}
}
