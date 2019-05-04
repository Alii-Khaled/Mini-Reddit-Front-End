import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-downvoted',
  templateUrl: './downvoted.component.html',
  styleUrls: ['./downvoted.component.css']
})
export class DownvotedComponent implements OnInit {
  /**
   * To hold posts
   */
  downvoted: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService, private router: Router) { }

  ngOnInit() {
    /**
     * Send request to get downvoted psosts
     */
    this.http.getDownVoted().subscribe((data: any) => {
      this.downvoted = data.posts;
    }, err => {
      /**
       * Retry if error occured
       */
      retry(3);
    }, () => {
// tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.downvoted.length; i++) {
        this.downvoted[i].downvoted = true;
      }
    });
  }
}
