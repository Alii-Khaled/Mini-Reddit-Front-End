import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { HttpService } from '../http.service';
import { PostsObjects } from '../classes/posts-objects';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.css']
})
export class PostLayoutComponent implements OnInit {
  /**
   * object to receivearray of objects of posts information
   */
  @Input()posts: PostsObjects;

  constructor() {}
  ngOnInit() { }

  /**
   * these are two functions for voting the first testing post
   * @param upVoted for knowing if it is clicked before or not
   */
 /*  upVote() {
    if (this.post.upvoted === false) {
      this.post.votes = this.post.votes + 1;
      this.post.upvoted = true;
    } else {
      this.post.votes = this.post.votes - 1;
      this.post.upvoted = false;
    }
  }

  downVote() {
    if (this.post.downvoted === false) {
      this.post.votes = this.postObj.votes - 1;
      this.post.downvoted = true;
    } else {
      this.post.votes = this.postObj.votes + 1;
      this.post.downvoted = false;
    }
  } */

}
