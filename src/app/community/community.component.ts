import { Component, OnInit } from '@angular/core';
import { Communities } from 'src/app/classes/community-info';
import { HttpService } from '../http.service';
import { CheckboxControlValueAccessor } from '@angular/forms';

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

  constructor(private http: HttpService) {

    
   }
    btn;
   buttonName='SUBSCRIBE';
   
 
   toggleButton(SUBSCRIBED){
     if(SUBSCRIBED==false)
    this.buttonName='SUBSCRIBE';
    
    else{
      this.buttonName='SUBSCRIBED' ;
      
      
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
