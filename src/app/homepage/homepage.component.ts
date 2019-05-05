import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from '../profile_Components/profile.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: ProfileHttpService , private router: Router) { }

  ngOnInit() {
    // this.http.getMyPosts(this.username).subscribe((data: any) => this.posts = data.posts);
  }

}
