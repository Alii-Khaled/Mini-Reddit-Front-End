import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { HttpService } from '../http.service';
import { PostsObjects } from '../classes/posts-objects';
import { PostService } from '../post.service';
import { post } from 'selenium-webdriver/http';

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
  ngOnInit() {
    // if (this.posts.upvoted === true) {
    //   document.getElementById('upVote').style.color = 'red';
    //   document.getElementById('voteNum').style.color = 'red';
    // } else if (this.posts.downvoted === true) {
    //   document.getElementById('downVote').style.color = 'blue';
    //   document.getElementById('voteNum').style.color = 'blue';
    // }
   }

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

  // dummyyyyyyyyy
  /* save() {
    this.postObj.saved = 'true';
    this.posts[i].saved = true;
  }
  unsave() {
    this.postObj.saved = 'false';
  }
  hide() {
    this.postObj.hidden = 'true';
  }
  unhide() {
    this.postObj.hidden = 'false';
  }
 */
upVote() {
  // if(this.posts.downvoted === true){
  //   // downvote();
  // }
  this.posts.downvoted = false;
  if (this.posts.upvoted === true) {
    this.posts.upvoted = false;
    this.posts.upvotes --;
  } else {
    this.posts.upvoted = true;
    this.posts.upvotes ++;
  }
}
downVote() {
  // if(this.posts.upvoted === true){
  //   // upvote();
  // }
  this.posts.upvoted = false;
  if (this.posts.downvoted === true) {
    this.posts.downvoted = false;
    this.posts.downvotes --;
  } else {
    this.posts.downvoted = true;
    this.posts.downvotes ++;
  }
}
unsave() {
  this.posts.saved = !this.posts.saved;
}
save() {
  this.posts.saved = true;
}
hide() {
  this.posts.hidden = true;
}
unhide() {
  this.posts.hidden = false;
}
}
