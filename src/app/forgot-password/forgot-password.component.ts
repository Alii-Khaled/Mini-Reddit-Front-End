import { Component, OnInit , TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {HttpService} from '../http.service';
import {FormBuilder, FormControlName , FormGroup , Validator, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  modalRef: BsModalRef;
  disabld: boolean;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };

  constructor(private modalService: BsModalService , private service: HttpService , private fb: FormBuilder) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  emailme() {
  }

}
