import { Component, OnInit } from '@angular/core';
import { UserCommunities } from 'src/app/classes/user-communities';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  MyCommunities: UserCommunities[];
  title = 10;
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() { }
  onclick() {
    this.http.GetMyCommunities().subscribe((data: UserCommunities[]) => this.MyCommunities = data);
  }

}
