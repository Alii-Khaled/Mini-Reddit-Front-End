import { Component, OnInit } from '@angular/core';
import { comments, post } from 'src/app/classes/comments';
import { ProfileHttpService } from '../profile.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  /**
   * To hold the url
   */
  a: string[];
  /**
   * To get the comments
   */
  comments: any[];
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
    this.http.getComments(this.username).subscribe((data: any[]) => this.comments = data);
  }
}
