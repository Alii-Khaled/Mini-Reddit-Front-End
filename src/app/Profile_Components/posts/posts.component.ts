import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService) { }

  /**
   * Username of the logged in user
   */
  username: string;
  /**
   * If getting user name succeed
   */
  success: boolean;
  ngOnInit() {
    /**
     * Send request to get psosts
     */
    this.http.GetUserName().subscribe((data: any) =>  {
      this.username = data.username;
      this.success = data.success;
    },
    (error: any) => {
      if (error.status === 404) {
        console.log('somethimg wrong!!!!');
      } else if (error.status === 401) {
        console.log('UnAuthorized');
      } else if (error.status === 403) {
        console.log('undefined type');
      }
    },
    () => this.http.GetMyPosts(this.username).subscribe((data: any) => this.posts = data.posts)
    );
  }
}
