import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from '../profile.http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  /**
   * To hlod the url
   */
  a: string[];
  /**
   * To overview
   */
  saved: any[];
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
       this.saved = [];
      /**
       * Request for saved links
       */
       this.http.getSaved(this.username).subscribe((data: any[]) => {
       this.saved = data ;
    });
    });
  }

  ngOnInit() {
  }

}
