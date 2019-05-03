import { Component, OnInit } from '@angular/core';
import { UserPublicInfo } from '../profile_classes/user-public-info';
import { ProfileHttpService } from '../profile_Components/profile.http.service';
import { retry } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  /**
   * Message to be printed in the snackbar
   */
  message: string;
  /**
   * Hold the username to be blocked
   */
  username = '';
  /**
   * To hold the blocked list usernames
   */
  usernames: string[];
  /**
   * To hold the blocked list
   */
  blockedPeople: UserPublicInfo[];
  /**
   * Here we initialize the page and get the blocked users list
   * @param http For requests
   */
  constructor(private http: ProfileHttpService , private snackBar: MatSnackBar) {
    /**
     * Initializing blocked list
     */
    this.blockedPeople = [];
    this.http.getBlockedUsers().subscribe((data: any) => {
      this.usernames = data.blockedList;
    },
    (error: any) => {
      /**
       * If any error then my folloing is empty
       */
      this.blockedPeople = [];
    }, () => {
      // tslint:disable-next-line: no-var-keyword disable-next-line: prefer-for-of
           for (var i = 0; i < this.usernames.length; i++) {
                this.http.getUserPublicInfo(this.usernames[i]).subscribe((data: UserPublicInfo) => {
                this.blockedPeople.push(data);
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

  ngOnInit() {
  }
  /**
   * Add user to be blocked
   */
  add() {
    /**
     * If the input was empty
     */
    if (this.username === '') {
        this.message = 'please enter username first to be blocked';
        this.snackBar.open(this.message, undefined, {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'snack-remove-button',
      });
        return;
    } else if (this.username === localStorage.getItem('username')) {
      this.message = 'you cannot block yourself :)' ;
      this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snack-remove-button',
    });
      return;
    }
    this.http.blockUser(this.username).subscribe((data: any) => {
      this.http.getUserPublicInfo(this.username).subscribe((data: UserPublicInfo) => {
        /**
         * Adding data to array to appear as soon as the user add new blocked user
         */
        this.blockedPeople.push(data);
        /**
         * Showing msg in snackbar
         */
        this.message = 'User blocked successfully !';
        this.snackBar.open(this.message, undefined, {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'snack-remove-button',
      });
      },
      (error: any) => {
      /**
       * If any error retry the request
       */
        retry(3);
      });
  }, (error: any) => {
        this.message = error.error.error;
        this.snackBar.open(this.message, undefined, {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'snack-remove-button',
      });
  }
  );
  }
  /**
   * Unblock a user
   */
  remove(name) {
    let index = -1;
    this.http.unblockUser(name).subscribe((data: any) => {
        /**
         * Showing msg in snackbar
         */
        this.message = 'User Unblocked successfully !';
        this.snackBar.open(this.message, undefined, {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'snack-remove-button',
      });
      /**
       * Removing the user from the blocked list
       */
// tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.blockedPeople.length; i++) {
        if (this.blockedPeople[i].username === name) {
          index = i;
        }
      }
      // tslint:disable-next-line: prefer-for-of
        for (let i = index; i < this.blockedPeople.length - 1; i++) {
          this.blockedPeople[i] = this.blockedPeople[i + 1];
        }
        this.blockedPeople.length--;
      }, (error: any) => {
        this.message = error.error.error;
        this.snackBar.open(this.message, undefined, {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'snack-remove-button',
      });
  }
  );
  }

}
