import { Component, OnInit, HostListener, Input } from '@angular/core';
import { comments } from '../classes/comments';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments-layout',
  templateUrl: './comments-layout.component.html',
  styleUrls: ['./comments-layout.component.css']
})
export class CommentsLayoutComponent implements OnInit {
  innerWidth = window.innerWidth;
  size: any;
  id: string;

  constructor(private apiService: HttpService, public router: Router) { }

  @Input()comments: comments;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerWidth = this.innerWidth - 100;
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
  this.id = 'commenting' + this.comments.comment_id.toString();
  document.getElementById(this.id).style.width = this.size;
  // for part of buttons
}

}
