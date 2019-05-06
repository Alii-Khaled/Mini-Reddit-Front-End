import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ProfileHttpService } from '../profile_Components/profile.http.service';
import { comments } from '../classes/comments';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Input } from '@syncfusion/ej2-inputs';
import { communityHttpService } from '../community/community.http.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private router: Router, private http: PostService, private httpComm: ProfileHttpService) { }

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
        ['bold', 'italic', 'link', 'strikeThrough', 'superscript'],
        ['fontSize', 'blockquote', 'removeBlockquote', 'orderedList', 'unorderedList'],
        ['link', 'unlink', 'image', 'video']
    ]

};

navLinks = [
  {path: 'details', label: 'V Details', icon: 'star'},
  {path: 'select', label: 'Product', icon: 'star_border'},
  {path: 'clselect', label: 'Client Details', icon: 'star_half'},
];

public communities = [
  'one', 'two', 'three'
];
// public communities;

/**
   * To hlod the url
   */
  a: string[];
  /**
   * User name for the profile owner
   */
  username: string;

  // @Input() posts;
  posts;

  ngOnInit() {
    /**
     * Getting profile owner username
     */
    this.a = this.router.url.split('/');
    this.username = this.a[this.a.length - 1];
    /**
     * Request for overview bun not completed yet
     */
    // get request to get communities that i am in, and put it in communities
    this.httpComm.getMyCommunities(this.username).subscribe((data: any) => {
      this.communities = data.communities;
    });
  }

  createPost(post_content, parent_link_id, post_title, community_id=1, image_path='', video_url='') {
    // post request to 'add new link' => "create post"
    // this.http.createPost(this.comments)
    // .subscribe(
    //   Response=>console.log('success', Response),
    //   error=>console.error('error',error)
    // );
    this.http.addNewLink(post_content, parent_link_id, post_title, community_id, image_path, video_url).subscribe((data: any) => this.posts = data);
  }

}
