import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
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
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.GetPostsObjects().subscribe((data: []) => this.posts = data);
  }

}
