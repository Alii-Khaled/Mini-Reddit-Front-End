import { Component, OnInit } from '@angular/core';
import { Communities } from 'src/app/classes/community-info';
import { HttpService } from '../http.service';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { communityHttpService } from '../community/community.http.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {communityModerators} from 'src/app/classes/community-moderators';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  moderators: communityModerators[];
   /**
   * Variable to put in it value of button
   */
  myFlagForButtonToggle;
  /**
   * Variable to put in it which message to show
   */
  message;
  /**
   * Variable to know what response so what action should i do after completion
   */
  theresponse;
  /**
   * Variable to get the response in it
   */
  Community: Communities;
  /**
   * Variable to know community id
   */
  commId;
  /**
   * Variable to put in it buttonname of subscribtion
   */
  buttonName = 'SUBSCRIBE';

  /**
   * 
   * @param http for requests
   * @param snackBar for notification popup
   * @param router for routing
   * @param route for Dynamic routing
   */




  /**
   * Constructor assign community id and handles dynamic routing and get community information
   */
  constructor(private http: communityHttpService, public snackBar: MatSnackBar, private router: Router, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.commId = parseInt(this.router.url.substr(11));
      this.http.GetCommunityInfo(this.commId).subscribe((data: Communities) => this.Community = data);
      this.myFlagForButtonToggle = false;

    });
  }
  /**
   * function toggleButton Toggles the subscribe to unsubscribe and vice verse
   */
  toggleButton(SUBSCRIBED: boolean) {
<<<<<<< HEAD
    if (SUBSCRIBED == true) {
=======
    if (SUBSCRIBED === false) {
      this.buttonName = 'SUBSCRIBE';
>>>>>>> 79030d56bc801ca885a50398052760cf0b53de3d
      this.http.UnSubscribeCommunity(this.commId).subscribe(
        response => {
          this.myFlagForButtonToggle = false;
          this.buttonName = 'SUBSCRIBE';
          this.message = 'UnSubscribed Successfully';
          this.snackBar.open(this.message, undefined, {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: 'snack-remove-button',

          });
          this.theresponse = true;
        },
        err => {
          this.myFlagForButtonToggle = true;
          console.log(this.myFlagForButtonToggle);
          if (err.error === 'UnAuthorized') {
            this.message = 'UnSubscribed Failed because you are not authorized';
          }
          else {
            this.message = 'UnSubscribed Failed';
          }
          this.snackBar.open(this.message, undefined, {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: 'snack-remove-button',
          });
          this.theresponse = false;
        },
        () => {
          if (this.theresponse) {
          }
        }
      );
    }
    else {


      this.http.SubscribeCommunity(this.commId).subscribe(
        response => {
          this.myFlagForButtonToggle = true;
          this.buttonName = 'SUBSCRIBED';
          this.message = 'subscribed Successfully';
          this.snackBar.open(this.message, undefined, {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: 'snack-remove-button',
          });
          this.theresponse = true;
        },
        err => {
          this.myFlagForButtonToggle = false;
          if (err.error === 'UnAuthorized') {
            this.message = 'subscribed Failed because you are not authorized';
          }
          else {
            this.message = 'subscribed Failed';
          }
          this.snackBar.open(this.message, undefined, {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: 'snack-remove-button',
          });
          this.theresponse = false;
        },
        () => {
          if (this.theresponse) {
          }
        }
      );
    }
  }
  /**
   * on initializing the page send a request to get current community information and display all information about it
   */
  ngOnInit() {
    this.http.GetCommunityInfo(this.commId).subscribe((data: Communities) => this.Community = data);
    this.http.GetMyModerators().subscribe((data: communityModerators[] ) => this.moderators = data);
    
  }

}
