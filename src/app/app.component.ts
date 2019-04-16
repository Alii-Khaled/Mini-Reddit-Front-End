import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav:string = 'false' ;
  constructor() {
    if (localStorage.getItem('navbar')!=null) {
      this.nav = localStorage.getItem('navbar');
    }
  }
  title = 'Reddit';
}
