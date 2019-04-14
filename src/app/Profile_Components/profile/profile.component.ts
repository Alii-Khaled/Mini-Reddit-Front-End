import { Component, OnInit } from '@angular/core';
import { UserPublicInfo } from 'src/app/Profile_classes/user-public-info';
import { ProfileHttpService } from '../profile.http.service';
import { ActivatedRoute } from '@angular/router';

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
   * @param route To use it when we want send parameters for current user (username) in the request
   */
  constructor(private http: ProfileHttpService, private route: ActivatedRoute) { }
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
      (error: any) => console.log('Error Exists'),
      () => this.http.GetUserPublicInfo(this.username).subscribe((data: UserPublicInfo) => {
        this.PublicInfo = data;
        this.PublicInfo.cake_day = this.PublicInfo.cake_day.substr(0, 10);
    })
      );
    }
}
