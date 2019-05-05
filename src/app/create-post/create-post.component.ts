import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ProfileHttpService } from '../profile_Components/profile.http.service';
import { comments } from '../classes/comments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private router: Router, private http: ProfileHttpService) { }
  
// try this
// editorConfig = {

//   editable: true,

//   spellcheck: false,

//   height: '10rem',

//   minHeight: '5rem',

//   placeholder: 'Text (optional)',

//   translate: 'no'

// };

// try this
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
    // this.http.getMyCommunities(this.username).subscribe((data: any) => {
    //   this.communities = data.communities;
    // });
  }

  createPost() {
    // post request to 'add new link' => "create post"
    // this.apiService.createPost(this.comments)
    // .subscribe(
    //   Response=>console.log('success', Response),
    //   error=>console.error('error',error)
    // );
  }

}
