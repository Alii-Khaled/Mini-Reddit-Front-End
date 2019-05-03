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
   * To hold the url
   */
  a: string[];
  /**
   * To get the posts
   */
  posts: PostsObjects[];
  /**
   * Username of the logged in user
   */
  username: string;
  /**
   * @param http For requests
   * @param router To rout to a new link
   */
  constructor(private http: ProfileHttpService , private router: Router) { }
  ngOnInit() {
    /**
     * Getting profile owner username
     */
    this.a = this.router.url.split('/');
    this.username = this.a[this.a.length - 2];
    /**
     * Request to get posts
     */
    this.http.getMyPosts(this.username).subscribe((data: any) => this.posts = data.posts);
  }
}
