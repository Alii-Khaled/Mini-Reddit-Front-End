import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Communities } from 'src/app/classes/community-info';
import { catchError } from 'rxjs/operators';
import {communityHttpService} from '../community/community.http.service';
import {MatSnackBar, MatSnackBarModule} from "@angular/material";
import { Router } from '@angular/router';
import { timeout, delay } from 'q';
@Component({
  selector: 'app-edit-community',
  templateUrl: './edit-community.component.html',
  styleUrls: ['./edit-community.component.css']
})
export class EditCommunityComponent implements OnInit {
  Community: Communities;
  commId;
  commname ;
  rules ;
  bio  ;
  banner;
  avatar ;
  constructor(private http: communityHttpService, public snackBar: MatSnackBar, private router: Router) {
    this.commId = parseInt(this.router.url.substr(11, this.router.url.length - 15));
    console.log(this.commId);
  }

  ngOnInit()
  {
  this.http.GetCommunityInfo(this.commId).subscribe((data: Communities) => {
   this.commname = data.community_name ;
   this.rules = data.community_rules;
   this.bio = data.community_description ;
   this.banner = data.community_banner ;
   this.avatar = data.community_logo ;
  }
    );
  }

  message;
  action;

theresponse: boolean;

OnRemovingCommunity(){
this.http.RemoveCommunity(this.commId).subscribe(
  response => {
    this.message = 'Community has been deleted';
    this.snackBar.open(this.message, undefined, {
  duration: 4000,
  verticalPosition: 'bottom',
  horizontalPosition: 'center',
  panelClass: 'snack-remove-button',

});

    this.theresponse = true;
  },
  err => {
    if (err.error === 'UnAuthorized')
    {
       this.message = 'Community has not been deleted because you are not authorized';
    }
   else if (err.error === "community doesn't exist")
    {
       this.message = "Community has not been deleted because Community doesn't exist";
    }
    else{
  this.message = 'Community has not been deleted';
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
  if (this.theresponse)
{
 
  setTimeout(() => this.router.navigateByUrl('#'), 5000);
}
  }
);

}


onEditCommunity(){
  

  this.http.editCommunity(this.commId, this.rules, this.bio, this.banner, this.avatar).subscribe(response => {
    this.message = 'Community has been edited';
    this.snackBar.open(this.message, undefined, {
  duration: 4000,
  verticalPosition: 'bottom',
  horizontalPosition: 'center',
  panelClass: 'snack-remove-button',

}); 
    this.theresponse = true;
  },
  err => {
    if (err.error === 'UnAuthorized')
    {
       this.message = 'Community has not been edited because you are not authorized';
    }
    else{
  this.message = 'Community has not been edited';
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
  if (this.theresponse)
{
 
  /* setTimeout(() =>this.router.navigateByUrl('#'),5000); */
}
  }
);

  
}


}
