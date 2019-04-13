import { Component, OnInit , TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {HttpService} from '../http.service';
import {FormBuilder, FormControlName , FormGroup , Validator, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
        /**
         * this class is used for getting username and password and set token in local storage
         */

export class LoginComponent implements OnInit {
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
  constructor(private modalService: BsModalService , private service: HttpService , private fb: FormBuilder , private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required , Validators.minLength(3) , Validators.maxLength(20)],
      password: ['', Validators.required]
    });
    this.disabld = this.form.valid;
   }

  ngOnInit() {
  }
    /**
     * take the user's input (username & password) from the input form and set token
     */
  login() {
    console.log('welcome');
    const val = this.form.value;
    this.service.login(val.username , val.password).subscribe((data: any) => {
     localStorage.setItem('token', data.token );
     const test = localStorage.getItem('token');
     this.router.navigateByUrl('profile/' + test);
   },
   err => {if (err.status === 422) {
     console.log(err.log);
     this.router.navigateByUrl('profile/' + '#');
     console.log('error');

   }});
  }
    /**
     * supposed to open sign up page as pop up
     */
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, this.config);
    }


}

