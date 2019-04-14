import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';

@Component({
  selector: 'app-upvoted',
  templateUrl: './upvoted.component.html',
  styleUrls: ['./upvoted.component.css']
})
export class UpvotedComponent implements OnInit {

  UpVoted: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService) { }

  ngOnInit() {
    /**
     * Send request to get Upvoted psosts
     */
    this.http.GetUpVoted().subscribe((data: any) => this.UpVoted = data.posts);
  }

}
