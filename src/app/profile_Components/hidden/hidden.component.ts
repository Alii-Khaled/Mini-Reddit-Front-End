import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';
import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css']
})
export class HiddenComponent implements OnInit {

  hidden: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService , private route: Router) { }

  ngOnInit() {
    /**
     * Send request to get hidden psosts
     */
    this.http.getHidden().subscribe((data: any) => {
      this.hidden = data.posts;
    }, (error: any) => {
      /**
       * If something wrong retry the request
       */
      if (error.satus === 401) {
        retry(3);
      } else {
        /**
         * Else then the user shouldn't be here so navegate to the homepage
         */
        this.route.navigateByUrl('');
      }
    });
  }

}
