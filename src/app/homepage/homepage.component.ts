import { Component, OnInit } from '@angular/core';
import { communityHttpService } from '../community/community.http.service';
import { PostsObjects } from 'src/app/classes/posts-objects';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    /**
 * To get the posts
 */
posts: PostsObjects[];
  constructor(private http: communityHttpService) { 
    this.http.getHomepagePosts().subscribe((data: any) => this.posts = data.posts);
  }

  ngOnInit() {

  }

}
