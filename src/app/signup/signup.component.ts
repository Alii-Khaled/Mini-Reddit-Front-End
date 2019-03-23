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
export class SignupComponent implements OnInit {

  form: FormGroup;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService , private service: HttpService , private fb: FormBuilder , private router: Router) {
    this.form = this.fb.group({
    email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  next() {
    const val = this.form.value;
    this.service.next( val.email).subscribe((data: any) => {
    this.router.navigateByUrl('#');
    },
    err => {if (err.status === 400) {
      console.log('error');

    }});
   }

}
