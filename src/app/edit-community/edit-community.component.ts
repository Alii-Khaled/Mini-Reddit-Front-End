import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Communities } from 'src/app/classes/community-info';
import { catchError } from 'rxjs/operators';
import {communityHttpService} from '../community/community.http.service'
import {MatSnackBar, MatSnackBarModule} from "@angular/material";
import { Router } from '@angular/router';
import { timeout } from 'q';
@Component({
  selector: 'app-edit-community',
  templateUrl: './edit-community.component.html',
  styleUrls: ['./edit-community.component.css']
})
export class EditCommunityComponent implements OnInit {
  Community : Communities;
  commId;
  commname ; 
  rules ;
  bio  ;
  banner;
  avatar ;
  
  constructor(private http: communityHttpService,public snackBar: MatSnackBar,private router:Router) { 

  }

  ngOnInit() 
  {
  this.http.GetCommunityInfo(1).subscribe((data: Communities) => {
   this.commname = data.community_name ;
   this.rules =data.community_rules;
   this.bio =data.community_description ;
   this.banner=data.community_banner ;
   this.avatar =data.community_logo ;   
  
  }
    )
 
 
  }

  message;
  action;



OnRemovingCommunity(){
this.http.RemoveCommunity(2).subscribe((data:any) => {
   
   err => {
     if (err.success === 'true') 
   {
    this.message='Community has been deleted'
    
    setTimeout(()=>this.snackBar.open(this.message, 'undefined', {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition:'center',
      panelClass:'snack-remove-button',
    }),4000);
    this.router.navigateByUrl('#');
   }
   else if (err.error==='UnAuthorized'){
    this.message="You can't Remove Community"
    this.snackBar.open(this.message, 'undefined', {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition:'center',
      panelClass:'snack-remove-button',
      
      
    });
  }
    else if (err.error==='UnAuthorized'){
      this.message="You can't Remove Community"
      this.snackBar.open(this.message, 'undefined', {
        duration: 4000,
        verticalPosition: 'bottom',
        horizontalPosition:'center',
        panelClass:'snack-remove-button',
        
        
      });
   }

}
    
});
/* this.message='Community has been deleted'
this.snackBar.open(this.message, 'undefined', {
  duration: 4000,
  verticalPosition: 'bottom',
  horizontalPosition:'center',
  panelClass:'snack-remove-button',
  
  
}); */

}


onEditCommunity(){

  this.http.editCommunity(this.commId,this.rules,this.bio,this.banner,this.avatar);
  this.message='Community has been edited'
  this.snackBar.open(this.message, undefined, {
    duration: 4000,
    verticalPosition: 'bottom',
    horizontalPosition:'center',
    panelClass:'snack-remove-button',
    
    
  });
  
}
}
