import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Communities } from 'src/app/classes/community-info';
import { catchError } from 'rxjs/operators';
import { communityHttpService } from '../community/community.http.service';
import { MatSnackBar, MatSnackBarModule, MatDialogModule, MatDialogRef, MatDialog } from "@angular/material";
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';
import { DropdownService } from 'src/app/dropdown.service';

@Component({
  selector: 'app-edit-community',
  templateUrl: './edit-community.component.html',
  styleUrls: ['./edit-community.component.css']
})
export class EditCommunityComponent implements OnInit {
      /**
   * To get the url
   */
  arr: string[];
  /**
   * Variable to assign response of community information
   */
  Community: Communities;
  /**
   * Variable to assign with community id
   */
  commId;
  /**
   * Variable to assign with community name
   */
  commname;
  /**
   * Variable to assign with community rules
   */
  rules;
  /**
   * Variable to assign with community description
   */
  bio;
  /**
   * Variable to assign with community banner
   */
  banner;
  /**
   * Variable to assign with community avatar
   */
  avatar;
  
  constructor(private http: communityHttpService, public snackBar: MatSnackBar, private router: Router, public dialog: MatDialog,public dropdown: DropdownService) {
    window.scroll(0,0);
    this.arr=this.router.url.split('/');
    this.commId = parseInt(this.arr[this.arr.length-2]);
    console.log(this.commId);

  }
  /**
   * ngOnInit assigns data to my variables
   */
  ngOnInit() {
    window.scroll(0,0);
    this.http.getCommunityInfo(this.commId).subscribe((data: Communities) => {
      this.commname = data.name;
      this.rules = data.rules;
      this.bio = data.desription;
      this.banner = data.banner;
      this.avatar = data.logo;

    }
    )
  }
  /**
   * Variable to put in it which message to show
   */
  message;
  /**
   * Variable to know what response so what action should i do after completion
   */
  theresponse: boolean;

  bannerUrl = "https://theme.zdassets.com/theme_assets/2219439/89cbe072bbb76fc29a82367bd19b511df487d018.png";
  avatarUrl = "https://theme.zdassets.com/theme_assets/2219439/89cbe072bbb76fc29a82367bd19b511df487d018.png";
  uploadedAvatar = null;
  uploadedBanner = null;
  reader: FileReader = new FileReader();


  processAvatar(event) {
    this.uploadedAvatar = event.target.files[0];

    this.reader.onload = (event: any) => {
      this.avatarUrl = event.target.result;
      this.uploadedAvatar = event.target.files[0];
      console.log('process avatar');
    };
    this.reader.readAsDataURL(this.uploadedAvatar);



  }

  processBanner(event) {
    this.uploadedBanner = event.target.files[0];
    this.reader.onload = (event: any) => {
      this.bannerUrl = event.target.result;
      this.uploadedBanner = event.target.files[0];
      console.log('process banner');
    };
    this.reader.readAsDataURL(this.uploadedBanner);


  }


  OnRemovingCommunity() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this community?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.http.removeCommunity(this.commId).subscribe(
          response => {
            this.message = 'Community has been deleted';
            this.snackBar.open(this.message, 'dismiss', {
              duration: 4000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
              panelClass: 'snack-remove-button',
            });

            this.theresponse = true;
          },
          err => {
            if (err.error === 'UnAuthorized') {
              this.message = 'Community has not been deleted because you are not authorized';
            }
            else if (err.error === "community doesn't exist") {
              this.message = "Community has not been deleted because Community doesn't exist";
            }
            else {
              this.message = 'Community has not been deleted';
            }
            this.snackBar.open(this.message, 'dismiss', {
              duration: 4000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
              panelClass: 'snack-remove-button',
            });
            this.theresponse = false;
          },
          () => {
            if (this.theresponse) {

              this.dropdown.changeData('' + 'Popular', 'https://cdn0.iconfinder.com/data/icons/huge-business-icons/512/Growth.png');
              setTimeout(() => this.router.navigateByUrl(''), 5000);
            }
          }
        );
      }
      else {
        console.log('No clicked');
        return;
      }
    });


  }


  onEditCommunity() {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm the Edition of this community?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.http.editCommunity(this.commId, this.rules, this.bio, this.uploadedBanner, this.uploadedAvatar).subscribe(response => {
          this.message = 'Community has been edited';
          this.snackBar.open(this.message, 'dismiss', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: 'snack-remove-button',

          });
          this.theresponse = true;
        },
          err => {
            if (err.error === 'UnAuthorized') {
              this.message = 'Community has not been edited because you are not authorized';
            }
            else {
              this.message = 'Community has not been edited';
            }
            this.snackBar.open(this.message, 'dismiss', {
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
        console.log('No clicked');
        return;
      }
    });
  }
}