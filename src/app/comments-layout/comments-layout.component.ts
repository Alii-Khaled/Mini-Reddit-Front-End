import { Component, OnInit, HostListener, Input } from '@angular/core';
import { comments, post } from '../classes/comments';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { c } from '../classes/c';

@Component({
  selector: 'app-comments-layout',
  templateUrl: './comments-layout.component.html',
  styleUrls: ['./comments-layout.component.css']
})
export class CommentsLayoutComponent implements OnInit {
  innerWidth = window.innerWidth;
  size: any;
  id: string;
  innerWidth2: number;

  // c = {
  //   post : {
  //     body : 'body',
  //     title : 'title',
  //     author_username: 'username',
  //     community: 'community',
  //     community_id: 1
  //   },
  //   comments: [
  //     {
  //       comment_id: 1,
  //       body: 'body comment 1',
  //       downvotes: 2,
  //       upvotes: 4,
  //       date: '4 days ago',
  //       upvoted: false,    // what is this???
  //       downvoted: false
  //     },
  //     {
  //       comment_id: 2,
  //       body: 'body comment 2',
  //       downvotes: 3,
  //       upvotes: 6,
  //       date: '4 days ago',
  //       upvoted: false,    // what is this???
  //       downvoted: false
  //     }
  //   ]
  // };

  constructor(private apiService: HttpService, public router: Router) { }

  @Input() c: c[];

  ngOnInit() {
    if (window.innerWidth > 960) {
      this.innerWidth2 = window.innerWidth - 350;
    } else {
      this.innerWidth2 = window.innerWidth;
    }
    this.innerWidth2 = this.innerWidth2 - 100;
    this.innerWidth = this.innerWidth2 - 150;
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

}