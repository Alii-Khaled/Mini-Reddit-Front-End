import { Component, OnInit } from '@angular/core';
import { Communities } from 'src/app/classes/community-info';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  /**
   * list of communities that the user subscribed
   */
  Community :Communities;
 
  /**
   * 
   * @param http for requests
   */

  constructor(private http: HttpService) { }

   /**
   * on initializing the page send a request to get current community info and display all info about it
   */
  ngOnInit() {
    this.http.GetCommunityInfo().subscribe((data: Communities) => this.Community = data);
  }

}
