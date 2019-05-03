import { Component, OnInit } from '@angular/core';
import { communityModerators } from 'src/app/classes/community-moderators';
import { communityHttpService } from '../community/community.http.service';
import { MatSnackBar, MatSnackBarModule, MatDialogModule, MatDialogRef, MatDialog } from "@angular/material";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-community-moderators',
  templateUrl: './community-moderators.component.html',
  styleUrls: ['./community-moderators.component.css']
})
export class CommunityModeratorsComponent implements OnInit {
  moderators: any[];
  message;
  constructor(private http: communityHttpService, public snackBar: MatSnackBar, private router: Router, route: ActivatedRoute, public dialog: MatDialog) {

    route.params.subscribe(val => {
      this.http.GetMyModerators().subscribe((data: communityModerators[]) => this.moderators = data as communityModerators[]);

    });
  }

  ngOnInit() {
    this.http.GetMyModerators().subscribe((data: communityModerators[]) => this.moderators = data);
  }
  onAddingmoderator() {
    var username = (<HTMLInputElement>document.getElementById("addmodd")).value;
    this.http.AddModerator(1, username).subscribe(
      response => {
        this.message = 'Added Successfully';
        this.snackBar.open(this.message, undefined, {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snack-remove-button',

        });
        console.log(username);
        let moderator= new communityModerators(username) ;
        var moderator1 :  communityModerators;
        moderator1=moderator;
        this.moderators.push(moderator1);
        console.log(this.moderators);
        console.log(moderator.moderator_name);
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
  ondeletingmoderator(i) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this moderator?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var username = this.moderators[i].moderators_name;
        var id = this.moderators[i].id;
        this.http.RemoveModerator(id, username).subscribe(
          response => {
            this.message = 'removed Successfully';
            this.snackBar.open(this.message, undefined, {
              duration: 4000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
              panelClass: 'snack-remove-button',

            });
            this.moderators.splice(i, 1);
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
      else {
        return;
      }
    });

  }
}
