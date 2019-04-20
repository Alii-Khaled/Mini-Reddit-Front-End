import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-view-single-post',
  templateUrl: './view-single-post.component.html',
  styleUrls: ['./view-single-post.component.css']
})
export class ViewSinglePostComponent implements OnInit {
  innerWidth = window.innerWidth;

  posts={
    post_id: 1,
    upvoted: true,
    downvoted: false,
    upvotes: 10,
    downvotes: 4,
    community: 'comm',
    body: 'body',
    saved: true,
    hidden: false,
    image: 'ssdf'
  };

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
