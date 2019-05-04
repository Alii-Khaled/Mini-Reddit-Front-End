import { Component, OnInit, Injectable } from '@angular/core';
import { UserCommunities } from 'src/app/profile_classes/user-communities';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import { UserPublicInfo } from 'src/app/profile_classes/user-public-info';
import { ProfileHttpService } from '../profile_Components/profile.http.service';
import { Router } from '@angular/router';
import { subscribeOn, retry, delay } from 'rxjs/operators';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
@Injectable()
export class UserHeaderComponent implements OnInit {
  /**
   * Left dropdown icon
   */
  leftIcon: string;
  /**
   * Left dorpdown title
   */
  leftTitle: string;
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
  myCommunities: UserCommunities[];
  /**
   * Current user public info
   */
  publicInfo: UserPublicInfo;
  /**
   * Username of people that the user follows
   */
  usernames: string[];
  /**
   * Info of people that user follows
   */
  myFollowing: UserPublicInfo[];
  /**
   * Subscribed communities id's
   */
  commIds: any;
  /**
   * @param http For requests
   * @param router To navigate to another page if token is sended false
   */
  constructor(private http: ProfileHttpService, private router: Router , private snackBar: MatSnackBar ,
              private dropdown: DropdownService) { }
  /**
   * On initializing the page send a request to get current user public info and display his/her name and karma
   * In the right dropdown
   */
  ngOnInit() {
      /**
       * Changing the title of the left dropdown when navigate anywhere
       */
      this.dropdown.leftTitle.subscribe(data => this.leftTitle = data);
      /**
       * Changing the title of the left dropdown when navigate anywhere
       */
      this.dropdown.leftLogo.subscribe(data => this.leftIcon = data);
      /**
       * Getting username
       */
      this.username = localStorage.getItem('username');
      this.http.getUserPublicInfo(this.username).subscribe((data: UserPublicInfo) => {
        this.publicInfo = data;
        this.publicInfo.photo_path = 'https://polar-ocean-4195.herokuapp.com/7777772e7265646469747374617469632e636f6d/avatars/avatar_default_10_FF8717.png';
      },
        (error: any) => {
          /**
           * Redirect the user to the home page if the user name which tring to goto his profile isn't exist
           */
          if (error.status === 403) {
            this.router.navigateByUrl('');
          }
        }
        );
    }
   /**
    * On clicking the left dropdown send a request to get this user's subscribed communities
    * And display it in this dropdown menu
    */
  onclickLeftDropdown() {
    /**
     * Initializing array to be empty every time i click on the dropdown menu
     */
    this.myFollowing = [];
    /**
     * Initializing usernames empty array
     */
    this.usernames = [];
     /**
      * Initialize my communities as empty array
      */
    this.myCommunities = [];
    /**
     * Getting communities that the user subscribes
     */
    this.http.getMyCommunities(this.username).subscribe((data: any) => {
      this.myCommunities = data.communities;
    });
    /**
     * Getting usernames following by this user
     */
    this.http.getMyFollowing(this.username).subscribe((data: any) => {
      this.usernames = data.followingList;
    },
    (error: any) => {
      /**
       * If any error then my folloing is empty
       */
    }, () => {
      // tslint:disable-next-line: no-var-keyword disable-next-line: prefer-for-of
          for (var i = 0; i < this.usernames.length; i++) {
            this.http.getUserPublicInfo(this.usernames[i]).subscribe((data: UserPublicInfo) => {
            this.myFollowing.push(data);
          },
          (error: any) => {
            /**
             * If any error do nothing
             */
      });
      }
          }
);
  }

  logout() {
    this.http.signOut().subscribe(
      response => {
        /**
         * Deleting anything depends on this user
         */
        localStorage.clear();
        /**
         * Redirect to home page
         */
        window.location.href = '';
      },
      err => {
          this.message = 'Failed to logout';
          this.snackBar.open(this.message, undefined, {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snack-remove-button',
        });
      },
    );
  }

  /**
   * Filter function
   */
  filterFunction() {
    // tslint:disable-next-line: one-variable-per-declaration
        let input, filter, a, i;
        /**
         * Getting the input area
         */
        input = document.getElementById('myInput');
        /**
         * Change all input letters to uppercase
         */
        filter = input.value.toUpperCase();
    // tslint:disable-next-line: prefer-const
        let div = document.getElementById('dropdown-menu-left');
        /**
         * Filter with a tags (names in tags)
         */
        a = div.getElementsByTagName('a');
        /**
         * Searching on all items in the dropdown
         */
        for (i = 0; i < a.length; i++) {
    // tslint:disable-next-line: prefer-const
          let txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
          } else {
            a[i].style.display = 'none';
          }
        }
      }
}
