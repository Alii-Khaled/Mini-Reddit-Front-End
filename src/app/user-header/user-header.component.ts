import { Component, OnInit } from '@angular/core';
import { UserCommunities } from 'src/app/Profile_classes/user-communities';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { UserPublicInfo } from 'src/app/Profile_classes/user-public-info';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  /**
   * list of communities that the user subscribed
   */
  MyCommunities: UserCommunities[];
  /**
   * current user public info
   */
  PublicInfo: UserPublicInfo;
  /**
   * 
   * @param http for requests
   * @param route to use it when we want send parameters for current user (username) in the request
   */
  constructor(private http: HttpService, private route: ActivatedRoute) { }
  /**
   * on initializing the page send a request to get current user public info and display his/her name and karma
   * in the right dropdown
   */
  ngOnInit() {
      this.http.GetUserPublicInfo(1).subscribe((data: UserPublicInfo) => this.PublicInfo = data);
   }
   /**
    * on clicking the left dropdown send a request to get this user's subscribed communities 
    * and display it in this dropdown menu
    */
   OnclickLeftDropdown() {
    this.http.GetMyCommunities().subscribe((data: UserCommunities[]) => this.MyCommunities = data);
  }

}
