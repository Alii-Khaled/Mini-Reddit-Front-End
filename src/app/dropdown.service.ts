import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  /**
   * BehaviorSubject to keep the most recent variable
   */
  private logo = new BehaviorSubject<string>('https://cdn0.iconfinder.com/data/icons/huge-business-icons/512/Growth.png');
  /**
   * To hold the logo
   */
  leftLogo = this.logo.asObservable();
  private title = new BehaviorSubject<string>('Popular');
  /**
   * To hold the title
   */
  leftTitle = this.title.asObservable();
  constructor() { }
  /**
   * To change the title and logo of the left dropdown
   * @param title Title in the dropdown
   * @param logo Logo in the dropdown
   */
  changeData(title: string , logo: string) {
    this.logo.next(logo);
    this.title.next(title);
  }
}
