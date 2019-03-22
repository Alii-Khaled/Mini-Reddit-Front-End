import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {FormBuilder, FormControlName , FormGroup , Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private service: HttpService , private fb: FormBuilder , private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }
  login() {
   const val = this.form.value;
   this.service.login(val.username , val.password).subscribe((data: any) => {
     localStorage.setItem('token', data.token );
     this.router.navigateByUrl('#');
   },
   err => {if (err.status === 400) {
     console.log('error');

   }});
  }

}

