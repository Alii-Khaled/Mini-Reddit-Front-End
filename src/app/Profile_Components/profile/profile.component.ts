import { Component, OnInit } from '@angular/core';
import { UserPublicInfo } from 'src/app/Profile_classes/user-public-info';
import { ProfileHttpService } from '../profile.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /**
   * Username of the logged in user
   */
  username: string;
  /**
   * If getting user name succeed
   */
  success: boolean;
  /**
   * Current user public info
   */
  PublicInfo: UserPublicInfo;
  /**
   * 
   * @param http For requests
   * @param router To rout to another url if there was an error
   */
  constructor(private http: ProfileHttpService, private router: Router) { }
  /**
   * On initializing the page send a request to get current user public info and display his/her name and karma
   * In the right dropdown
   */
  ngOnInit() {
      /**
       * Getting user name
       */
      this.http.GetUserName().subscribe((data: any) =>  {
        /**
         * Get username
         */
        this.username = data.username;
        /**
         * Get success status
         */
        this.success = data.success;
      },
      (error: any) => {
        /**
         * If there is error getting user name navigate to homepage
         */
        this.router.navigateByUrl('#');
      },
      /**
       * Request to get user's public info
       */
      () => this.http.GetUserPublicInfo(this.username).subscribe((data: UserPublicInfo) => {
        this.PublicInfo = data;
        /**
         * To split cake day from day and hour to day only
         */
        this.PublicInfo.cake_day = this.PublicInfo.cake_day.substr(0, 10);
    })
      );
    }
}
