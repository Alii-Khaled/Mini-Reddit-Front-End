import { Component, OnInit } from '@angular/core';
import { ProfileHttpService } from '../profile.http.service';
import { PostsObjects } from 'src/app/classes/posts-objects';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  posts: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService) { }

  ngOnInit() {
    this.http.GetPostsObjects('ahmed').subscribe((data: PostsObjects[]) => this.posts = data);
  }

}
