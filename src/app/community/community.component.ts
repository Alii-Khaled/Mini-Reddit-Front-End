import { Component, OnInit } from '@angular/core';
import { Communities } from 'src/app/classes/community-info';
import { HttpService } from '../http.service';
import { CheckboxControlValueAccessor } from '@angular/forms';
import {communityHttpService} from '../community/community.http.service'
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  

  /**
   * list of communities that the user subscribed
   */
  Community : Communities;
 
  /**
   * 
   * @param http for requests
   */
  
 /* public comm =new Communities('community','http://i.imgur.com/sdO8tAw.png','http://i.imgur.com/sdO8tAw.png','This is a subreddit about art. We do not support the reddit redesign. It is horrible and the admins have ignored our feedback. Please do not use it. Go to your preferences and enable old reddit as your default experience.','rules');
 */

  constructor(private http: communityHttpService) {

    
   }
   commId:number=1;
    btn;
   buttonName='SUBSCRIBE';
   
 
   toggleButton(SUBSCRIBED:boolean){
     if(SUBSCRIBED==false)
     {
    this.buttonName='SUBSCRIBE';
    this.http.UnSubscribeCommunity(this.commId);
     }
    else{
      this.buttonName='SUBSCRIBED' ;
      this.http.SubscribeCommunity(this.commId);
      
    }
  
   }
   
  /*  unsubscribed(){
    this.buttonName='UNSUBSCRIBE';
   
   } 
   */

   /**
   * on initializing the page send a request to get current community info and display all info about it
   */
  
  ngOnInit() {
     this.http.GetCommunityInfo(1).subscribe((data: Communities) => this.Community = data); 
   
  }

}
