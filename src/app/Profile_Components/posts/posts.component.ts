import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService) { }

  ngOnInit() {
    /**
     * Send request to get psosts
     */
    this.http.GetUpVoted('ahmed').subscribe((data: PostsObjects[]) => this.posts = data);
  }
}
