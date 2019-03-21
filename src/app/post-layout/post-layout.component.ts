import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.css']
})
export class PostLayoutComponent implements OnInit {

  // public mPost
  constructor() {
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
    link: 'https://www.reddit.com/r/MovieDetails/comments/b2yiz6/in_blade_runner_2049_2017_replicants_can_be/'
  };

  public posts = [
    {
        post_id: 1,
        body: 'post1',
        videoUrl: 'https:\/\/www.youtube.com',
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
        upper_link_cont: '4rc3n21.jpg'
    },
    {
        post_id: 2,
        body: 'post2',
        // image: 'storage\/app\/avater.jpg',
        image: 'https://d160uhrw1ev0bq.cloudfront.net/img-optim/exchanges/exchange_flow_tile_1.jpg',
        videoUurl: 'https:\/\/www.youtube.com',
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
        upper_link_cont: 'news/2019/03/19/former-mississippi-gulf-coast-officer-says-she-had-sex-while-child-dying-hot-car/3209859002/'
    },
    {
        post_id: 3,
        body: 'post3',
        // image: 'storage\/app\/avater.jpg',
        image: 'https://d160uhrw1ev0bq.cloudfront.net/img-optim/exchanges/exchange_flow_tile_2.jpg',
        videoUrl: 'https:\/\/www.youtube.com',
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
        upper_link_cont: 'PaleBasenji'
    }
];
  // @Input() public parentData;
// tslint:disable-next-line: no-input-rename
  @Input('parentData') public name;
  @Output() public childEven = new EventEmitter();

  ngOnInit() {
  }

  upVote() {
    this.postObj.votes = this.postObj.votes + 1;
  }

  downVote() {
    this.postObj.votes = this.postObj.votes - 1;
  }

}
