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
  httpService: any;

  // public mPost
  constructor(private http: HttpService) {
    // mPost = qsdsasd
  }
  public link1 = 'parent.location=';
  public link2 = 'https://www.reddit.com/r/MovieDetails/comments/b2yiz6/in_blade_runner_2049_2017_replicants_can_be/';
  public imgsrc = 'https://i.pinimg.com/236x/cf/7f/83/cf7f83d1e0a270fa7f4e50a3bf1a62ee--emoticon-smile-face.jpg';
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

  public posts = [
    {
        post_id: 1,
        body: 'post1',
        video_url: 'https:\/\/www.youtube.com',
        // image: 'storage\/app\/avater.jpg',
        image: 'https://d160uhrw1ev0bq.cloudfront.net/img-optim/exchanges/exchange_flow_tile_3.jpg',
        title: 'title1',
        username: 'ahmed',
        community: 'laravel',
        subscribed: 'true',
        author_photo_path: 'storage\/app\/avater.jpg',
        down_votes: 17,
        up_votes: 30,
        date: ' 2 days ago ',
        comments_num: 0,
        saved: 'true',
        hidden: 'false',
        up_voted: 'true',
        down_voted: 'false',
        first_icon: 'zoom_out_map',
        upper_link: 'i.redd.it/cw7oa5',
        upper_link_cont: '4rc3n21.jpg',
        up_voting() {
          if (this.up_voted === 'false') {
            this.up_votes = this.up_votes + 1;
            this.up_voted = 'true';
        } else {
            this.up_votes = this.up_votes - 1;
            this.up_voted = 'false';
        }
        },
        down_voting() {
          if (this.down_voted) {
            this.down_votes = this.down_votes + 1;
            this.down_voted = 'true';
          } else {
            this.down_votes = this.down_votes - 1;
            this.down_voted = 'false';
          }
        }
    },
    {
        post_id: 2,
        body: 'post2',
        // image: 'storage\/app\/avater.jpg',
        image: 'https://d160uhrw1ev0bq.cloudfront.net/img-optim/exchanges/exchange_flow_tile_1.jpg',
        video_url: 'https:\/\/www.youtube.com',
        title: 'title2',
        username: 'ahmed',
        community: 'none',
        subscribed: 'false',
        author_photo_path: 'storage\/app\/avater.jpg',
        down_votes: 15,
        up_votes: 20,
        date: ' 2 days ago ',
        comments_num: 18,
        saved: 'false',
        hidden: 'true',
        up_voted: 'true',
        down_voted: 'false',
        first_icon: 'open_in_new',
        upper_link: 'www.hattiesburgamerican.com/story/',
        upper_link_cont: 'news/2019/03/19/former-mississippi-gulf-coast-officer-says-she-had-sex-while-child-dying-hot-car/3209859002/',
        up_voting() {
          if (this.up_voted === 'false') {
            this.up_votes = this.up_votes + 1;
            this.up_voted = 'true';
        } else {
            this.up_votes = this.up_votes - 1;
            this.up_voted = 'false';
        }
        },
        down_voting() {
          if (this.down_voted) {
            this.down_votes = this.down_votes + 1;
            this.down_voted = 'true';
          } else {
            this.down_votes = this.down_votes - 1;
            this.down_voted = 'false';
          }
        }
    },
    {
        post_id: 3,
        body: 'post3',
        // image: 'storage\/app\/avater.jpg',
        image: 'https://d160uhrw1ev0bq.cloudfront.net/img-optim/exchanges/exchange_flow_tile_2.jpg',
        video_url: 'https:\/\/www.youtube.com',
        title: 'title3',
        username: 'ahmed',
        community: 'none',
        subscribed: 'false',
        author_photo_path: 'storage\/app\/avater.jpg',
        down_votes: 15,
        up_votes: 30,
        date: ' 3 days ago ',
        comments_num: 60,
        saved: 'true',
        hidden: 'true',
        up_voted: 'true',
        down_voted: 'false',
        first_icon: 'open_in_new',
        upper_link: '//gfycat.com/Filthy',
        upper_link_cont: 'PaleBasenji',
        up_voting() {
          if (this.up_voted === 'false') {
            this.up_votes = this.up_votes + 1;
            this.up_voted = 'true';
        } else {
            this.up_votes = this.up_votes - 1;
            this.up_voted = 'false';
        }
        },
        down_voting() {
          if (this.down_voted) {
            this.down_votes = this.down_votes + 1;
            this.down_voted = 'true';
          } else {
            this.down_votes = this.down_votes - 1;
            this.down_voted = 'false';
          }
        }
    }
];
public myPosts;
  // @Input() public parentData;
// tslint:disable-next-line: no-input-rename
  @Input('parentData') public name;
  @Output() public childEven = new EventEmitter();

  ngOnInit() {
    // this.http.GetPostsObjects().subscribe((data: PostsObjects) => this.myPosts = data);
    this.httpService.GetPostsObjects().subscribe(data => this.myPosts = data);
  }

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
