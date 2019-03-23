import { Component, OnInit , TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
 /**
  * this class is the header that contains login & sign up buttons , search , popular ,oc, and view options
  */
export class HeaderComponent implements OnInit {

 /**
  * this to configure the popup modal
  */
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
 /**
  * this is the function that shows the login page as popup
  */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
