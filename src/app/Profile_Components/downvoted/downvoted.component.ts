import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';


@Component({
  selector: 'app-downvoted',
  templateUrl: './downvoted.component.html',
  styleUrls: ['./downvoted.component.css']
})
export class DownvotedComponent implements OnInit {

  downvoted: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService) { }

  ngOnInit() {
    /**
     * Send request to get downvoted psosts
     */
    this.http.GetDownVoted().subscribe((data: any) => this.downvoted = data.posts);
  }

}
