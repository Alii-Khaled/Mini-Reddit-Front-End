import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-upvoted',
  templateUrl: './upvoted.component.html',
  styleUrls: ['./upvoted.component.css']
})
export class UpvotedComponent implements OnInit {

  UpVoted: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService) { }

  ngOnInit() {
    /**
     * Send request to get Upvoted psosts
     */
    this.http.getUpVoted().subscribe((data: any) => {
      this.UpVoted = data.posts;
    }, err => {
      /**
       * Retry if error occured
       */
      retry(3);
    }, () => {
// tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.UpVoted.length; i++) {
        this.UpVoted[i].upvoted = true;
      }
    });
  }

}
