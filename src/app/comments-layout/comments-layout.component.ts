import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { comments, post } from '../classes/comments';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-comments-layout',
  templateUrl: './comments-layout.component.html',
  styleUrls: ['./comments-layout.component.css']
})
export class CommentsLayoutComponent implements OnInit {
  commentid: number;

  constructor(private http: PostService, public router: Router) { }
  innerWidth = window.innerWidth;
  size: any;
  id: string;
  innerWidth2: number;

  posts = {
    post_id: 1,
    upvoted: false,
    downvoted: true,
    upvotes: 10,
    downvotes: 4,
    community: 'comm',
    body: 'body',
    saved: true,
    hidden: false,
    image: 'ssdf',
    username: 'usern',
    date: '10 hours ago'
  };

  @Input()comments: comments[];
  @Input()post: post;

  // @Output() postsEvent = new EventEmitter();
  // @Output()

  ngOnInit() {
    if (window.innerWidth > 960) {
      this.innerWidth2 = window.innerWidth - 350;
    } else {
      this.innerWidth2 = window.innerWidth;
    }
    this.innerWidth2 = this.innerWidth2 - 100;
    this.innerWidth = this.innerWidth2 - 150;

    // this.commentid = this.comments.comment_id;
  }

/**
 * 
 * @param event this is a responsive auto update
 */
@HostListener('window:resize', ['$event'])
onResize(event) {
  if (window.innerWidth > 960) {
    this.innerWidth2 = window.innerWidth - 350;
  } else {
    this.innerWidth2 = window.innerWidth;
  }
  this.innerWidth2 = this.innerWidth2 - 100;
  this.size = this.innerWidth2.toString();
  this.size = this.size + 'px';
  this.id = 'commenting';
  //  + this.comments.comment_id.toString();
  document.getElementById(this.id).style.width = this.size;
  // for part of buttons
}

save(comment_id: number){
  console.log('save id='+comment_id);
  // if (!this.http.savePost(post_id).subscribe((data: any) => this.posts = data) === false) {
  //   this.posts.saved = true;
  // }
  this.commentid=comment_id;
  this.http.unsaveComment(this.commentid).subscribe((data: any) => this.posts = data);
}

unsave(comment_id: number){
  console.log('unsave id='+this.commentid);
  // console.log(this.http.unsavePost(this.commentid).subscribe((data: any) => this.posts = data));
  // if (!this.http.unsavePost(this.commentid).subscribe((data: any) => this.posts = data) === false) {
  //   this.posts.saved = !this.posts.saved;
  // }
  this.commentid=comment_id;
  this.http.unsaveComment(this.commentid).subscribe((data: any) => this.posts = data);
}

// hide(comment_id) {
//   // if (!this.http.hidePost(this.commentid).subscribe((data: any) => this.posts = data) === false) {
//   //   this.posts.hidden = true;
//   // }
//   this.commentid=comment_id;
//   console.log('hide id='+this.commentid);
//   this.http.hideComment(this.commentid).subscribe((data: any) => this.posts = data);
// }
// unhide(comment_id) {
//   // if (!this.http.unhidePost(this.commentid).subscribe((data: any) => this.posts = data) === false) {
//   //   this.posts.hidden = false;
//   // }
//   this.commentid=comment_id;
//   console.log('unhide id='+this.commentid);
//   this.http.unhideComment(this.commentid).subscribe((data: any) => this.posts = data);
// }

remove(comment_id){
  this.commentid=comment_id;
  this.http.removeComment(this.commentid).subscribe((data: any)=>this.posts = data);
}

viewPost(post_id: number) {
  // request to view post
  // this.postsEvent.emit(this.posts);
}

saveComment(comment_id: number){
  this.http.saveComment(comment_id);
}

unsaveComment(comment_id: number){
  this.http.unsaveComment(comment_id);
}

}