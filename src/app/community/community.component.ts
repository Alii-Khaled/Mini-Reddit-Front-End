import { Component, OnInit } from '@angular/core';
import { Communities } from 'src/app/classes/community-info';
import { HttpService } from '../http.service';
import { CheckboxControlValueAccessor } from '@angular/forms';
import {communityHttpService} from '../community/community.http.service'
import {MatSnackBar, MatSnackBarModule} from "@angular/material";
import { Router } from '@angular/router';
import {ActivatedRoute}from '@angular/router';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  

  message;
  theresponse;
  Community : Communities;
 commId;
  /**
   * 
   * @param http for requests
   */
  
 

  constructor(private http: communityHttpService,public snackBar: MatSnackBar,private router:Router,route:ActivatedRoute) {
    route.params.subscribe(val => {
    this.commId=parseInt(this.router.url.substr(11));
    console.log(this.commId);
     this.http.GetCommunityInfo(this.commId).subscribe((data: Communities) => this.Community = data);
    });
   
   }
  
    btn;
   buttonName='SUBSCRIBE';
   
 
   toggleButton(SUBSCRIBED:boolean){
     if(SUBSCRIBED==false)
     {
    this.buttonName='SUBSCRIBE';
    this.http.UnSubscribeCommunity(this.commId).subscribe(
      response => {
        this.message='Subscribed Successfully';
    this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition:'center',
      panelClass:'snack-remove-button',
    
    }); 
    this.theresponse=true;
      },
      err => {
        if(err.error==='UnAuthorized')
        {
           this.message='Subscribed Failed because you are not authorized';
        }
        else{
      this.message='Subscribed Failed';
        }
    this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition:'center',
      panelClass:'snack-remove-button',
    }); 
    this.theresponse=false;
      },
      () => {
      if(this.theresponse)
    {
     
    
    }
      }
    );
     }
    else{

      this.buttonName='SUBSCRIBED' ;
      this.http.SubscribeCommunity(this.commId).subscribe(
      response => {
        this.message='Unsubscribed Successfully';
    this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition:'center',
      panelClass:'snack-remove-button',
    
    }); 
    this.theresponse=true;
      },
      err => {
        if(err.error==='UnAuthorized')
        {
           this.message='Unsubscribed Failed because you are not authorized';
        }
        else{
      this.message='Unsubscribed Failed';
        }
    this.snackBar.open(this.message, undefined, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition:'center',
      panelClass:'snack-remove-button',
    }); 
    this.theresponse=false;
      },
      () => {
      if(this.theresponse)
    {
     
    
    }
      }
    );
      
    }
  
   }
   

   /**
   * on initializing the page send a request to get current community info and display all info about it
   */
  
  ngOnInit() {
   
    this.http.GetCommunityInfo(this.commId).subscribe((data: Communities) => this.Community = data);
  }

}
