import { Component, OnInit, HostListener, TemplateRef, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { PostsObjects } from '../classes/posts-objects';
import { singlePost } from '../classes/single-post';
import { ViewSinglePostService } from './view-single-post.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-single-post',
  templateUrl: './view-single-post.component.html',
  styleUrls: ['./view-single-post.component.css']
})
export class ViewSinglePostComponent implements OnInit {
  innerWidth = window.innerWidth;

  comment = {
    comment_id: 1,
    body: 'thats me'
  }

  post: singlePost;
  loggedin = false;

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
      placeholder: 'What are your thoughts?',
      imageEndPoint: '',
      toolbar: [
          ['bold', 'italic', 'link', 'strikeThrough', 'superscript'],
          ['fontSize', 'blockquote', 'removeBlockquote', 'orderedList', 'unorderedList'],
          ['link', 'unlink', 'image', 'video']
      ]
  
  };

 /**
   * @param modalService To open pop up for login
   */
  constructor(private http: HttpService, private route: ActivatedRoute, private modalService: BsModalService) { }

  /**
  * This to configure the popup modal
  */
 modalRef: BsModalRef;
 config = {
   animated: true,
   keyboard: true,
   backdrop: true,
   ignoreBackdropClick: false,
   class: 'my-modal'
 };

 @Input() public sharedData;

  // posts = {
  //   post_id: 1,
  //   upvoted: false,
  //   downvoted: true,
  //   upvotes: 10,
  //   downvotes: 4,
  //   community: 'comm',
  //   body: 'body',
  //   saved: true,
  //   hidden: false,
  //   image: 'ssdf',
  //   username: 'usern',
  //   date: '10 hours ago'
  // };
  // posts: any;
  posts = this.sharedData;

  ngOnInit() {
    // this.http.GetSinglePost().subscribe((data: PostsObjects[]) => this.posts = data);
    // this.http.getSinglePost(1).subscribe((data: singlePost) => this.post = data);
    // this.http.getMyCommunities('username').subscribe((data: any) => this.communities = data);

    // this.http.GetSinglePost().subscribe((data: PostsObjects[]) => this.posts = data);
  }

  // reseiveData($event){
  //   this.posts = $event;
  // }

  /**
  * This is the function that shows the login page as popup
  */
 openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, this.config);
}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
