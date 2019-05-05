import { Component, OnInit } from '@angular/core';
import { communityModerators } from 'src/app/classes/community-moderators';
import { communityHttpService } from '../community/community.http.service';
import { MatSnackBar, MatSnackBarModule, MatDialogModule, MatDialogRef, MatDialog } from "@angular/material";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';
import { UserPublicInfo } from 'src/app/profile_classes/user-public-info';
import { Communities } from 'src/app/classes/community-info';
import { from } from 'rxjs';
@Component({
  selector: 'app-community-moderators',
  templateUrl: './community-moderators.component.html',
  styleUrls: ['./community-moderators.component.css']
})
export class CommunityModeratorsComponent implements OnInit {
  moderators: communityModerators[];
  isModerator: boolean;
  message;
  /**
* To get the url
*/
  arr: string[];
  /**
 * Variable to put in it buttonname of subscribtion
 */
  /**
   * Current user public info
   */
  PublicInfo: UserPublicInfo;
  commId;

  constructor(private http: communityHttpService, public snackBar: MatSnackBar, private router: Router, route: ActivatedRoute, public dialog: MatDialog) {
    window.scroll(0, 0);
    window.scroll(0, 0);
    this.arr = this.router.url.split('/');
    this.commId = parseInt(this.arr[this.arr.length - 2]);
    route.params.subscribe(val => {
      window.scroll(0, 0);
      this.http.getMyModerators(this.commId).subscribe((data: any) => this.moderators = data.moderators);

    });
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.arr = this.router.url.split('/');
    this.commId = parseInt(this.arr[this.arr.length - 2]);
    console.log(this.commId);
    this.http.getMyModerators(this.commId).subscribe((data: any) => this.moderators = data.moderators);
    console.log(this.commId);
    this.http.getCommunityInfo(this.commId).subscribe((data: Communities) => {
      this.isModerator = data.moderator;
    }, response => { },
      () => {
        /*  if (this.isModerator) {
   
           document.getElementById('qwjnbwqijd').style.display = 'block';
           document.getElementById('addModerator').style.display = 'block';
         } else {
           document.getElementById('qwjnbwqijd').style.display = 'none';
           document.getElementById('addModerator').style.display = 'none';
         } 
    */
      }
    );
  }
  onAddingModerator() {
    var username = (<HTMLInputElement>document.getElementById("addmodd")).value;
    /*  this.http.getUserPublicInfo(username).subscribe((data: UserPublicInfo) => {
       this.PublicInfo = data;
     });
  */
    this.http.addModerator(this.commId, username, "https://www.redditstatic.com/desktop2x/img/placeholder_gradient_light-280.png").subscribe(
      response => {
        this.message = 'Added Successfully';
        this.snackBar.open(this.message, undefined, {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snack-remove-button'
        });
        console.log(username);
        let moderator = new communityModerators(username, "https://www.redditstatic.com/desktop2x/img/placeholder_gradient_light-280.png");
        var moderator1: communityModerators;
        moderator1 = moderator;
        this.moderators.push(moderator1);

      },
      err => {
        this.message = 'Added failed';
        this.snackBar.open(this.message, undefined, {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snack-remove-button',

        });
      },
      () => {

      }
    )
  }
  onDeletingModerator(i) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this moderator?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        var username = this.moderators[i].moderator_username;
        var id=1;
       /*  var id = this.moderators[i].id; for mock */
        /* w bab3at id dah parameter awlany 3ashan al8y mn mock */
        this.http.removeModerator(this.commId, username, id).subscribe(
          response => {
            
            this.message = 'removed Successfully';
            this.snackBar.open(this.message, undefined, {
              duration: 4000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
              panelClass: 'snack-remove-button',

          });
          this.router.navigateByUrl(this.router.url);
        },
        err => {
          this.message = 'removed failed';
          this.snackBar.open(this.message, undefined, {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: 'snack-remove-button',

          });
        });
      }
      else{
        return;
      }
    });

}
}
