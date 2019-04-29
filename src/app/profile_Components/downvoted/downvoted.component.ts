import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-downvoted',
  templateUrl: './downvoted.component.html',
  styleUrls: ['./downvoted.component.css']
})
export class DownvotedComponent implements OnInit {
  /**
   * To hold posts
   */
  downvoted: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService, private router: Router) { }

  ngOnInit() {
    /**
     * Send request to get downvoted psosts
     */
    this.http.getDownVoted().subscribe((data: any) => this.downvoted = data.posts);
  }

}
