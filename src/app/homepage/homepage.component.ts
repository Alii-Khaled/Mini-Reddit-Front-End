import { Component, OnInit } from '@angular/core';
import { communityHttpService } from '../community/community.http.service';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
leftTitle;
leftIcon;
  /**
* To get the posts
*/
  posts: PostsObjects[];
  constructor(private http: communityHttpService,route: ActivatedRoute,private dropdown: DropdownService,private router: Router) {
    if(localStorage.getItem('token')===null)
    {
this.router.navigateByUrl('r/popular');
    }
else{
  this.dropdown.changeData( 'Home', 'https://image.flaticon.com/icons/svg/25/25694.svg');
    this.http.getHomepagePosts().subscribe((data: any) => this.posts = data.posts);
}

  }

  ngOnInit() {
  /*   if(localStorage.getItem('token')===null)
    {
this.router.navigateByUrl('r/popular');
    }
else{
  this.dropdown.changeData( 'Home', 'https://image.flaticon.com/icons/svg/25/25694.svg');
    this.http.getHomepagePosts().subscribe((data: any) => this.posts = data.posts);
} */
  }

}
