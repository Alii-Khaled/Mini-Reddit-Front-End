import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static nav = false;
  title = 'Reddit';
  get nav() {
    return AppComponent.nav;
  }
}
