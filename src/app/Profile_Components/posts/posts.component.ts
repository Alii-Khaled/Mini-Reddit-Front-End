import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  /**
   * Messege to detect errors
   */
  messege: string;
  /**
   * To get the posts
   */
  posts: PostsObjects[];
  /**
   * @param http For requests
   * @param router To rout to a new link
   */
  constructor(private http: ProfileHttpService , private router: Router) { }

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
      /**
       * Assign username to the coming username from json
       */
      this.username = data.username;
      /**
       * Same as above but for success
       */
      this.success = data.success;
    },
    (error: any) => {
        /**
         * Rout to home page if any error founded
         */
        this.router.navigateByUrl('#');
    },
    () => this.http.GetMyPosts(this.username).subscribe((data: any) => this.posts = data.posts)
    );
  }
}
