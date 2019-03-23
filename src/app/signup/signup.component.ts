import { Component, OnInit } from '@angular/core';

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
  constructor(private service: HttpService , private fb: FormBuilder , private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      password_confirmation: ['', Validators.required, Validators.minLength(8)]
    });
   }
  

  ngOnInit() {
  }

  SignUp() {
    const val = this.form.value;
    this.service.SignUp(val.username , val.password, val.email, val.password_confirmation).subscribe((data: any) => {
      localStorage.setItem('token', data.token );
      var test =localStorage.getItem('token');
      
      this.router.navigateByUrl('profile/' + test);
    },
    err => {if (err.status === 400) {
      console.log('error');
    }});
   }
}
