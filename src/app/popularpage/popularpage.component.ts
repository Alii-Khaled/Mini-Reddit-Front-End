import { Component, OnInit } from '@angular/core';
import { communityHttpService } from '../community/community.http.service';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-popularpage',
  templateUrl: './popularpage.component.html',
  styleUrls: ['./popularpage.component.css']
})
export class PopularpageComponent implements OnInit {
  /**
* To get the posts
*/
posts: PostsObjects[];
  constructor(private http: communityHttpService,route: ActivatedRoute) { }

  ngOnInit() {
    this.http.getpopularPosts().subscribe((data: any) => this.posts = data.posts);
  }

}
