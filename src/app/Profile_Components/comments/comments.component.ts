import { Component, OnInit } from '@angular/core';
import { comments } from 'src/app/classes/comments';
import { ProfileHttpService } from '../profile.http.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: comments[];

  constructor(private http: ProfileHttpService) { }

  ngOnInit() {

    this.http.GetComments('ahmed').subscribe((data: comments[]) => this.comments = data);
  }

}
