import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Communities } from 'src/app/classes/community-info';
import { catchError } from 'rxjs/operators';
import {communityHttpService} from '../community/community.http.service';
import {MatSnackBar, MatSnackBarModule} from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-community',
  templateUrl: './edit-community.component.html',
  styleUrls: ['./edit-community.component.css']
})
export class EditCommunityComponent implements OnInit {
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
  constructor(private http: communityHttpService, public snackBar: MatSnackBar, private router: Router) {
    this.commId = parseInt(this.router.url.substr(11, this.router.url.length - 15));
    console.log(this.commId);
   
  }
  /**
   * ngOnInit assigns data to my variables
   */
  ngOnInit() {
    this.http.GetCommunityInfo(this.commId).subscribe((data: Communities) => {
      this.commname = data.community_name;
      this.rules = data.community_rules;
      this.bio = data.community_description;
      this.banner = data.community_banner;
      this.avatar = data.community_logo;   
    
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

  bannerUrl="https://theme.zdassets.com/theme_assets/2219439/89cbe072bbb76fc29a82367bd19b511df487d018.png";  
  avatarUrl="https://theme.zdassets.com/theme_assets/2219439/89cbe072bbb76fc29a82367bd19b511df487d018.png";
  uploadedAvatar=null;
  uploadedBanner=null;
  reader:FileReader=new FileReader();


  processAvatar(event){
    this.uploadedAvatar=event.target.files[0];
    
   this.reader.onload=(event:any)=>{
    this.avatarUrl=event.target.result;
    console.log('process avatar');
   };
   this.reader.readAsDataURL(this.uploadedAvatar);
   
 
   
  }

  processBanner(event){
    this.uploadedBanner=event.target.files[0];
    this.reader.onload=(event:any)=>{
      this.bannerUrl=event.target.result;
      console.log('process banner');
     };
     this.reader.readAsDataURL(this.uploadedBanner);
    
 
  }
 
 
  OnRemovingCommunity() {
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

          setTimeout(() => this.router.navigateByUrl('#'), 5000);
        }
      }
    );

  }


  onEditCommunity() {


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
        if (err.error === 'UnAuthorized') {
          this.message = 'Community has not been edited because you are not authorized';
        }
        else {
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
        if (this.theresponse) {

        }
      }
    );


  }


}
