import { Component, OnInit , TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
 /**
  * This class is the header that contains login & sign up buttons , search , popular ,oc, and view options
  */
export class HeaderComponent implements OnInit {

 /**
  * This to configure the popup modal
  */
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };
  /**
   * @param modalService To open pop up for login
   */
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
 /**
  * This is the function that shows the login page as popup
  */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  /**
   * Filter function
   */
  filterFunction() {
// tslint:disable-next-line: one-variable-per-declaration
    let input, filter, a, i;
    /**
     * Getting the input area
     */
    input = document.getElementById('myInput');
    /**
     * Change all input letters to uppercase
     */
    filter = input.value.toUpperCase();
// tslint:disable-next-line: prefer-const
    let div = document.getElementById('dropdown-menu-left');
    /**
     * Filter with a tags (names in tags)
     */
    a = div.getElementsByTagName('a');
    /**
     * Searching on all items in the dropdown
     */
    for (i = 0; i < a.length; i++) {
// tslint:disable-next-line: prefer-const
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = '';
      } else {
        a[i].style.display = 'none';
      }
    }
  }
}
