import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from '../profile.http.service';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { Router, ActivatedRoute } from '@angular/router';
import { comments } from 'src/app/classes/comments';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  /**
   * To hlod the url
   */
  a: string[];
  /**
   * To overview
   */
  overview: any[];
  /**
   * User name for the profile owner
   */
  username: string;
  /**
   * @param http For requests
   * @param router For navigation
   */
  constructor(private http: ProfileHttpService, private router: Router , private route: ActivatedRoute) {
    route.params.subscribe(val => {
      /**
       * Getting profile owner username
       */
       this.a = this.router.url.split('/');
       this.username = this.a[this.a.length - 1];
       this.overview = [];
      /**
       * Request for overview bun not completed yet
       */
       this.http.getOverView(this.username).subscribe((data: any[]) => {
       this.overview = data ;
    });
    });
  }

  ngOnInit() {
  }
}
