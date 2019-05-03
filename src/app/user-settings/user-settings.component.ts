import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor(private dropdown: DropdownService) { 
    this.dropdown.changeData('User Settings', 'https://i.redd.it/x0iiv7jthx901.png');
  }

  ngOnInit() {
  }

}
