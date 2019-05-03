import { Component, OnInit } from '@angular/core';
import { UserPublicInfo } from 'src/app/profile_classes/user-public-info';
import { ProfileHttpService } from '../profile.http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DropdownService } from 'src/app/dropdown.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  /**
   * My following
   */
  myFollowing: string[];
  /**
   * The word on the button of user card
   */
  cardButton: string;
  /**
   * To hlod the url
   */
  a: string[];
  /**
   * Am I follow that user?
   */
  follow: boolean;
  /**
   * Boolean to indicate if i'm in another user profile (not mine)
   */
  myProfile: boolean;
  /**
   * Username of the profile owner user
   */
  username: string;
  /**
   * Current user public info
   */
  PublicInfo: UserPublicInfo;
  /**
   * @param http For requests
   * @param router To rout to another url if there was an error
   * @param route To reload username of the profile owner when starting the component
   * @param UserHeaderComponent To change the dropdown menu icon and title to the username and user logo
   */
  constructor(private http: ProfileHttpService, private router: Router , private route: ActivatedRoute ,
              private dropdown: DropdownService) {
    /**
     * Getting usernames of people that the user follows only for the first time
     */
    this.http.getMyFollowing(localStorage.getItem('username')).subscribe((data: any) => {
      this.myFollowing = data.followingList;
    },
    (error: any) => {
      /**
       * If any error then my folloing is empty
       */
      this.myFollowing = [];
    }, () => {
      route.params.subscribe(val => {

        /**
         * Getting profile owner username
         */
          this.a = this.router.url.split('/');
          if (this.a.length === 3) {
            this.username = this.a[this.a.length - 1];
          } else {
            this.username = this.a[this.a.length - 2];
          }
          /**
           * Check if user on another one profile or on his profile
           */
          this.myProfile = (localStorage.getItem('username') === this.username);
          /**
           * If it's his profile then the button will create new post
           */
          // tslint:disable-next-line: prefer-const
          let btn = document.getElementById('card-button');
          if (this.myProfile) {
            this.cardButton = 'NEW POST';
            btn.style.backgroundColor = '#0079d3';
// tslint:disable-next-line: deprecation
            btn.style.webkitTextFillColor = 'white';
          } else  if (this.isFromMyFollowers()) {
            this.cardButton = 'UNFOLLOW';
            btn.style.backgroundColor = 'white';
// tslint:disable-next-line: deprecation
            btn.style.webkitTextFillColor = '#0079d3';
            btn.style.borderColor = '#0079d3';
          } else {
            this.cardButton = 'FOLLOW';
            btn.style.backgroundColor = '#0079d3';
// tslint:disable-next-line: deprecation
            btn.style.webkitTextFillColor = 'white';
          }
          /**
           * Request to get user's public info
           */
          this.http.getUserPublicInfo(this.username).subscribe((data: UserPublicInfo) => {
            this.PublicInfo = data;
            /**
             * To split cake day from day and hour to day only
             */
            this.PublicInfo.cake_day = this.PublicInfo.cake_day.substr(0, 10);
        }, err => {
          /**
           * Retry request 3 times if error is occured
           */
          retry(3);
        }, () => {
        /**
         * Changing the dropdown logo and title
         */
        this.dropdown.changeData('u/' + this.PublicInfo.name, this.PublicInfo.photo_path);
        });
        });
    }
    );
  }
  ngOnInit() {
  }

  /**
   * When mouse is on the button
   */
  mouseEnter() {
    /**
     * For Unfollow button
     */
    // tslint:disable-next-line: prefer-const
    let btn = document.getElementById('card-button');
    if (this.isFromMyFollowers()) {
      btn.style.borderColor = '#0889ec';
      btn.style.webkitTextFillColor = '#0889ec';
    } else {
      btn.style.backgroundColor = '#0889ec';
    }
  }
  /**
   * When mouse leave the button
   */
  mouseLeave() {
    /**
     * For Unfollow button
     */
    // tslint:disable-next-line: prefer-const
    let btn = document.getElementById('card-button');
    if (this.isFromMyFollowers()) {
      btn.style.borderColor = '#0079d3';
      btn.style.webkitTextFillColor = '#0079d3';
    } else {
      btn.style.backgroundColor = '#0079d3';
    }
  }

  /**
   * Going to the top of page on clicking the button
   */
 topFunction() {
   /**
    * For safari
    */
  document.body.scrollTop = 0;
  /**
   * For Chrome, Firefox, IE and Opera
   */
  document.documentElement.scrollTop = 0;
}
isFromMyFollowers():boolean {
  if (localStorage.getItem('username') === null) {
    return false;
  }
// tslint:disable-next-line: no-var-keyword prefer-for-of
  for (var i = 0; i < this.myFollowing.length; i++) {
    if (this.myFollowing[i] === this.username) {
      return true;
    }
  }
  return false;
}

}
/**
 * Function to check is that user is followed by me
 */
/**
 * When scrolling more than 20 px then the button will appear
 */
// tslint:disable-next-line: only-arrow-functions
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (document.getElementById('myBtn')) {
      document.getElementById('myBtn').style.display = 'block';
    }
  } else {
    if (document.getElementById('myBtn')) {
      document.getElementById('myBtn').style.display = 'none';
  }
}
}
