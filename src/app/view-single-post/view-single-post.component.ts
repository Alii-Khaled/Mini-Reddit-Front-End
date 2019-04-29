import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-single-post',
  templateUrl: './view-single-post.component.html',
  styleUrls: ['./view-single-post.component.css']
})
export class ViewSinglePostComponent implements OnInit {
  innerWidth = window.innerWidth;

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

  constructor(private http: HttpService) { }

  ngOnInit() {
    // this.http.GetSinglePost().subscribe((data: PostsObjects[]) => this.posts = data);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
