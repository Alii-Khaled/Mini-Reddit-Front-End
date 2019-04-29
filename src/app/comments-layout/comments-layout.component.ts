import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-comments-layout',
  templateUrl: './comments-layout.component.html',
  styleUrls: ['./comments-layout.component.css']
})
export class CommentsLayoutComponent implements OnInit {
  innerWidth: number;
  size: any;
  id: string;
  public comments = {comment_id: 1};

  constructor() {}

  ngOnInit() {
  }

  /**
 * 
 * @param event this is a responsive auto update
 */
@HostListener('window:resize', ['$event'])
onResize(event) {
  if (window.innerWidth > 960) {
    this.innerWidth = window.innerWidth - 350;
  } else {
    this.innerWidth = window.innerWidth;
  }
  this.innerWidth = this.innerWidth - 100;
  this.size = this.innerWidth.toString();
  this.size = this.size + 'px';
  this.id = 'commenting' + this.comments.comment_id.toString();
  document.getElementById(this.id).style.width = this.size;
  // for part of buttons
  this.innerWidth = this.innerWidth - 150;
  this.size = this.innerWidth.toString();
  this.size = this.size + 'px';
  this.id = 'buttons' + this.comments.comment_id;
  document.getElementById(this.id).style.width = this.size;
}

}
