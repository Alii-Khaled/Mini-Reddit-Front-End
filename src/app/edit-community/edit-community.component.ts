import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Communities } from 'src/app/classes/community-info';
import { catchError } from 'rxjs/operators';
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

  
  constructor(private http: HttpService) { 

  }

  ngOnInit() {
  // this.http.GetCommunityInfo(1).subscribe((data: Communities) => this.Community = data); 
  // this.commname = this.Community.community_name ;
  // this.rules =this.Community.community_rules;
  // this.bio =this.Community.community_description ;
  // this.banner=this.Community.community_banner ;
  // this.avatar =this.Community.community_logo ;
  }
OnRemovingCommunity(){
this.http.RemoveCommunity(1);
}
onEditCommunity(){

  this.http.editCommunity(this.commId,this.rules,this.bio,this.banner,this.avatar);
}
}
