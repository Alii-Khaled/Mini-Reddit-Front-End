import { Component, OnInit } from '@angular/core';
import { comments, post } from 'src/app/classes/comments';
import { ProfileHttpService } from '../profile.http.service';
import { c } from 'src/app/classes/c';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  c: c[];
  comments: comments[];
  post: post;

  constructor(private http: ProfileHttpService) { }

  ngOnInit() {

    this.http.GetC('ahmed').subscribe((data: c[]) => this.c = data);
    this.http.GetComments('ahmed').subscribe((data: comments[]) => this.comments = data);
    this.http.GetCommentsPost('ahmed').subscribe((data: post) => this.post = data);
  }

}
