import { Component, OnInit } from '@angular/core';
import { UserCommunities } from 'src/app/classes/user-communities';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { UserPublicInfo } from 'src/app/classes/user-public-info';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  MyCommunities: UserCommunities[];
  PublicInfo: UserPublicInfo;
  title = 10;
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.http.GetUserPublicInfo(1).subscribe((data: UserPublicInfo) => this.PublicInfo = data);
   }
   OnclickLeftDropdown() {
    this.http.GetMyCommunities().subscribe((data: UserCommunities[]) => this.MyCommunities = data);
  }

}
