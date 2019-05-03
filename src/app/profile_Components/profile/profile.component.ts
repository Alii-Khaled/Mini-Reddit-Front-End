import { Component, OnInit } from '@angular/core';
import { UserPublicInfo } from 'src/app/profile_classes/user-public-info';
import { ProfileHttpService } from '../profile.http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DropdownService } from 'src/app/dropdown.service';
import { retry } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  /**
   * To hold snackbar msg
   */
  message: string;
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
              private dropdown: DropdownService , private snackBar: MatSnackBar) {
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
    if (this.cardButton === 'UNFOLLOW') {
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
    if (this.cardButton === 'UNFOLLOW') {
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
/**
 * Check if this user from my following
 */
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

/**
 * What to do on clicking on card button
 */
cardButtonClick() {
  /**
   * If i'm on my profile then it creates a new post
   */
  if (this.cardButton === 'NEW POST') {
    // TODO: put routing link here to create new post
  } else if (this.cardButton === 'FOLLOW') {
    /**
     * Follow user request
     */
    this.http.follow(this.username).subscribe((data: any) => {
      /**
       * Changing cardButton to be UNFOLLOW
       */
      this.cardButton = 'UNFOLLOW';
      /**
       * For button
       */
      let btn = document.getElementById('card-button');
      btn.style.backgroundColor = 'white';
// tslint:disable-next-line: deprecation
      btn.style.webkitTextFillColor = '#0079d3';
      btn.style.borderColor = '#0079d3';
      /**
       * Printing msg in the snackbar
       */
      this.message = 'User has been followed successfully !';
      this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snack-remove-button',
    });
    /**
     * Changing button to be unfollow style
     */
    } , (error: any) => {
      this.message = error.error.error;
      this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snack-remove-button',
    });
    });
  } else if (this.cardButton === 'UNFOLLOW') {
    /**
     * Follow user request
     */
    this.http.unfollow(this.username).subscribe((data: any) => {
      /**
       * Changing cardButton to be UNFOLLOW
       */
      this.cardButton = 'FOLLOW';
      /**
       * For button
       */
      let btn = document.getElementById('card-button');
      btn.style.backgroundColor = '#0079d3';
// tslint:disable-next-line: deprecation
      btn.style.webkitTextFillColor = 'white';
      /**
       * Printing msg in the snackbar
       */
      this.message = 'User has been unfollowed successfully !';
      this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snack-remove-button',
    });
    /**
     * Changing button to be unfollow style
     */
    } , (error: any) => {
      this.message = error.error.error;
      this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snack-remove-button',
    });
    });
  }
}
}
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
