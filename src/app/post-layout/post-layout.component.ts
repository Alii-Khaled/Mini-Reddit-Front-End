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

  constructor(private http: PostService, public router: Router) {}
  /**
   * object to receivearray of objects of posts information
   */
  @Input()posts: PostsObjects;
  @Input() myPost: number;
  innerWidth = window.innerWidth;
  public type: string;
  innerWidth2: number;

  editing = false;

  editorConfig = {
    editable: true,
      spellcheck: true,
      height: '10rem',
      minHeight: '0',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Text (optional)',
      imageEndPoint: '',
      toolbar: [
          // ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
          // ['fontName', 'fontSize', 'color'],
          // ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
          // ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
          // ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
          // ['link', 'unlink', 'image', 'video']
          ['bold', 'italic', 'link', 'strikeThrough', 'superscript'],
          ['fontSize', 'blockquote', 'removeBlockquote', 'orderedList', 'unorderedList'],
          ['link', 'unlink', 'image', 'video']
      ]
  
  };
  postid;

  public size = '';
  public id = '';
  ngOnInit() {
    if (window.innerWidth > 960) {
      this.innerWidth2 = window.innerWidth - 350;
    } else {
      this.innerWidth2 = window.innerWidth;
    }
    this.innerWidth2 = this.innerWidth2 - 100;
    this.innerWidth = this.innerWidth2 - 150;

    
    this.postid = this.posts.post_id;
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
// unsave() {
//   this.posts.saved = !this.posts.saved;
// }
// save() {
//   this.posts.saved = true;
// }
save(post_id: number){
  console.log('save id='+post_id);
  if (!this.http.savePost(post_id).subscribe((data: any) => this.posts = data) === false) {
    this.posts.saved = true;
  }
}

unsave(post_id: number){
  console.log('unsave id='+this.postid);
  // console.log(this.http.unsavePost(this.postid).subscribe((data: any) => this.posts = data));
  if (!this.http.unsavePost(this.postid).subscribe((data: any) => this.posts = data) === false) {
    this.posts.saved = !this.posts.saved;
  }
}

hide() {
  if (!this.http.hidePost(this.postid).subscribe((data: any) => this.posts = data) === false) {
    this.posts.hidden = true;
  }
}
unhide() {
  if (!this.http.unhidePost(this.postid).subscribe((data: any) => this.posts = data) === false) {
    this.posts.hidden = false;
  }
}

viewPost(post_id: number) {
  // request to view post
  // this.postsEvent.emit(this.posts);
}

toggleEditing(){
  if (this.editing){
    this.editing = false;
  } else {
    this.editing = true;
  }
}

/**
 * 
 * @param event this is a responsive auto update
 */
@HostListener('window:resize', ['$event'])
onResize(event) {
  if (window.innerWidth > 960) {
    // this.innerWidth2 = window.innerWidth - 700;
    this.innerWidth2 = window.innerWidth - 350;
  } else {
    this.innerWidth2 = window.innerWidth;
  }
  this.innerWidth2 = this.innerWidth2 - 100;
  this.size = this.innerWidth2.toString();
  this.size = this.size + 'px';
  this.id = 'posting' + this.posts.post_id;
  document.getElementById(this.id).style.width = this.size;
  // for third part in the form of the post
  this.innerWidth = this.innerWidth2 - 150;
  this.size = this.innerWidth.toString();
  this.size = this.size + 'px';
  this.id = 'third' + this.posts.post_id;
  document.getElementById(this.id).style.width = this.size;
}

}
