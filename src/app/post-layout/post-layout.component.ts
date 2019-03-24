import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { HttpService } from '../http.service';
import { PostsObjects } from '../classes/posts-objects';

@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.css']
})
export class PostLayoutComponent implements OnInit {
  /**
   * object to receivearray of objects of posts information
   */
  posts: PostsObjects[];

  /**
   * @param http for requests
   */
  constructor(private http: HttpService) {
    // this.http.GetPostsObjects().subscribe((data: PostsObjects[]) => this.myPosts = data); 
  }
  /**
   * variable to get image source
   */
  public imgsrc = 'https://i.pinimg.com/236x/cf/7f/83/cf7f83d1e0a270fa7f4e50a3bf1a62ee--emoticon-smile-face.jpg';
  /**
   * object of the first post which is the testing post
   */
  public postObj = {
    votes: 5,
    title: 'Skydiver catches pet bird mid-air',
    srcImage: 'https://www.redditstatic.com/desktop2x/img/snoo_discovery@1x.png',
    username: 'u/everyfatguyever',
    date: '12 hours ago',
    comments: 230,
    type: 'r/pics',
    link: 'https://www.reddit.com/r/MovieDetails/comments/b2yiz6/in_blade_runner_2049_2017_replicants_can_be/',
    upVoted: false,
    downVoted: false
  };


/**
 * these two lines are just for testing and applying child component
 */
// tslint:disable-next-line: no-input-rename
  @Input('parentData') public name;
  @Output() public childEven = new EventEmitter();

  ngOnInit() {
    /**
     * to get posts objects information from the request
     */
    this.http.GetPostsObjects().subscribe((data: PostsObjects[]) => this.posts = data);
    // this.httpService.GetPostsObjects().subscribe(data => this.myPosts = data);
  }

  /**
   * these are two functions for voting the first testing post
   * @param upVoted for knowing if it is clicked before or not
   */
  upVote() {
    if (this.postObj.upVoted === false) {
      this.postObj.votes = this.postObj.votes + 1;
      this.postObj.upVoted = true;
    } else {
      this.postObj.votes = this.postObj.votes - 1;
      this.postObj.upVoted = false;
    }
  }

  downVote() {
    if (this.postObj.downVoted === false) {
      this.postObj.votes = this.postObj.votes - 1;
      this.postObj.downVoted = true;
    } else {
      this.postObj.votes = this.postObj.votes + 1;
      this.postObj.downVoted = false;
    }
  }

}
