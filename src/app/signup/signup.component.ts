import { Component, OnInit , TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {HttpService} from '../http.service';
import {FormBuilder, FormControlName , FormGroup , Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
 /**
  * this class is used for getting user's email to sign up
  */
export class SignupComponent implements OnInit {
/* *aboshama and mahmoud Trying to do signup

form: FormGroup;
  constructor(private service: HttpService , private fb: FormBuilder , private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      password_confirmation: ['', Validators.required, Validators.minLength(8)]
    });
   } */


  form: FormGroup;
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'my-modal'
  };
  constructor(private modalService: BsModalService , private service: HttpService , private fb: FormBuilder , private router: Router) {
    this.form = this.fb.group({
    email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
    /**
     * take the user's input(email) from the input form
     */
  next(template: TemplateRef<any>) {
    const val = this.form.value;
    /* this.service.next( val.email).subscribe((data: any) => {
    },
    err => {if (err.status === 400) {
      console.log('error');

    }}); */
    this.openModal(template);
   }
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  SignUp() {
    const val = this.form.value;
    this.service.SignUp(val.username , val.password, val.email, val.password_confirmation).subscribe((data: any) => {
      localStorage.setItem('token', data.token );
      var test = localStorage.getItem('token');

      this.router.navigateByUrl('profile/' + test);
    },
    err => {if (err.status === 400) {
      console.log('error');
    }});
   }
}
