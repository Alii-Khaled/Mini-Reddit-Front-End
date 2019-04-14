import { Component, OnInit } from '@angular/core';
import { UserCommunities } from 'src/app/Profile_classes/user-communities';
import { ActivatedRoute } from '@angular/router';
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
        this.username = data.username;
        this.success = data.success;
      },
      (error: any) => {
        if (error.status === 401) {
          this.router.navigateByUrl('#');
          localStorage.removeItem('token');
        }
      },
      () => this.http.GetUserPublicInfo(this.username).subscribe((data: UserPublicInfo) => {
        this.PublicInfo = data; },
        (error: any) => {
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
   this.http.GetMyCommunities().subscribe((data: UserCommunities[]) => this.MyCommunities = data);
    /**
     * Getting usernames of people that the user follows
     */
    this.http.GetMyFollowing(this.username).subscribe((data: any) => {
      console.log('Ay 7aga');
      this.usernames = data.follwingList;
    },
    (error: any) => {
      if (error.status === 403) {
        console.log('Username does not exist');
      } else if (error.status === 401) {
        console.log('UnAuthorized');
      }
    }
    );
    for (var i = 0; i < this.usernames.length; i++) {
      this.http.GetUserPublicInfo(this.usernames[i]).subscribe((data: UserPublicInfo) => {
        this.MyFollowing.push(data); },
        (error: any) => {
          if (error.status === 403) {
            console.log('There is no follower like that');
          }
        }
        );
    }
  }

}
