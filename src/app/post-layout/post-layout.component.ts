import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { HttpService } from '../http.service';
import { PostsObjects } from '../classes/posts-objects';
import { PostService } from '../post.service';
import { post } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.css']
})
export class PostLayoutComponent implements OnInit {
  innerWidth2: number;

  constructor(private apiService: HttpService, public router: Router) {}
  /**
   * object to receivearray of objects of posts information
   */
  @Input()posts: PostsObjects;
  innerWidth = 1268;
  public type: string;

  public size = '';
  public id = '';
  ngOnInit() {
   }

  /**
   * these are two functions for voting the first testing post
   * @param upVoted for knowing if it is clicked before or not
   */

upVote() {
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

/**
 * 
 * @param event this is a responsive auto update
 */
@HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  this.innerWidth = this.innerWidth - 100;
  this.size = this.innerWidth.toString();
  this.size = this.size + 'px';
  this.id = 'posting' + this.posts.post_id;
  document.getElementById(this.id).style.width = this.size;
  // for third part in the form of the post
  this.innerWidth = this.innerWidth - 150;
  this.size = this.innerWidth.toString();
  this.size = this.size + 'px';
  this.id = 'third' + this.posts.post_id;
  document.getElementById(this.id).style.width = this.size;
}

}
