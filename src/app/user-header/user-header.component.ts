import { Component, OnInit } from '@angular/core';
import { UserCommunities } from 'src/app/Profile_classes/user-communities';
import {MatSnackBar, MatSnackBarModule} from "@angular/material";
import { UserPublicInfo } from 'src/app/Profile_classes/user-public-info';
import { ProfileHttpService } from '../Profile_Components/profile.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  /**
   * Message will be printed when erro is happend
   */
  message: string;
  /**
   * Username of the logged in user
   */
  username: string;
  /**
   * If getting user name succeed
   */
  success: boolean;
  /**
   * List of communities that the user subscribed
   */
  MyCommunities: UserCommunities[];
  /**
   * Current user public info
   */
  PublicInfo: UserPublicInfo;
  /**
   * Username of people that the user follows
   */
  usernames: string[];
  /**
   * Info of people that user follows
   */
  MyFollowing: UserPublicInfo[];
  /**
   * @param http For requests
   * @param router To navigate to another page if token is sended false
   */
  constructor(private http: ProfileHttpService, private router: Router , private snackBar: MatSnackBar) { }
  /**
   * On initializing the page send a request to get current user public info and display his/her name and karma
   * In the right dropdown
   */
  ngOnInit() {
      /**
       * Getting user name
       */
      this.http.GetUserName().subscribe((data: any) =>  {
        this.username = data.username;
        this.success = data.success;
      },
      (error: any) => {
        /**
         * If error status = 401 that's mean that user is unauthorized 
         * So we remove the token and redirect it to the homepage
         */
        if (error.status === 401) {
          this.router.navigateByUrl('#');
          localStorage.removeItem('token');
        }
      },
      () => this.http.GetUserPublicInfo(this.username).subscribe((data: UserPublicInfo) => {
        this.PublicInfo = data; },
        (error: any) => {
          /**
           * Redirect the user to the home page if the user name which tring to goto his profile isn't exist
           */
          if (error.status === 403) {
            this.router.navigateByUrl('#');
            console.log('There is no user');
          }
        }
        )
      );
    }
   /**
    * On clicking the left dropdown send a request to get this user's subscribed communities
    * And display it in this dropdown menu
    */
   OnclickLeftDropdown() {
     /**
      * Getting communities that the user subscribes
      */
    // this.http.GetMyCommunities().subscribe((data: UserCommunities[]) => this.MyCommunities = data);
    /**
     * Getting usernames of people that the user follows
     */
    this.http.GetMyFollowing(this.username).subscribe((data: any) => {
      this.usernames = JSON.parse(data.follwingList);
    },
    (error: any) => {
      /**
       * If the username isn't correct print in the screen
       */
      if (error.status === 403) {
        this.message = 'Username does not exist';
        this.snackBar.open(this.message, undefined, {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'snack-remove-button',
    });
          /**
           * If error number 401 then user is not authorized
           */
    } else if (error.status === 401) {
      this.message = 'UnAuthorized';
      this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snack-remove-button',
    });
      }
    }
    );
    for (var i = 0; i < this.usernames.length; i++) {
      this.http.GetUserPublicInfo(this.usernames[i]).subscribe((data: UserPublicInfo) => {
        this.MyFollowing.push(data);
        console.log(this.MyFollowing); },
        (error: any) => {
          /**
           * If error number 403 then print this messege
           */
          if (error.status === 403) {
            this.message = 'There is no follower like that';
            this.snackBar.open(this.message, undefined, {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: 'snack-remove-button',
    });
    }
        }
        );
    }
  }
}
