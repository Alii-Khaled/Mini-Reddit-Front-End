import { Component, OnInit } from '@angular/core';
import { Communities } from 'src/app/classes/community-info';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  Community :Communities[];
 


  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.GetCommunityInfo().subscribe((data: Communities[]) => this.Community = data);
  }

}
