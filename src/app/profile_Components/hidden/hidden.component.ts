import { Component, OnInit } from '@angular/core';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { ProfileHttpService } from '../profile.http.service';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css']
})
export class HiddenComponent implements OnInit {

  hidden: PostsObjects[];
  /**
   * @param http For requests
   */
  constructor(private http: ProfileHttpService) { }

  ngOnInit() {
    /**
     * Send request to get hidden psosts
     */
    this.http.getHidden().subscribe((data: PostsObjects[]) => this.hidden = data);
  }

}
