import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { HttpService } from '../http.service';
import { FormBuilder, FormControlName, FormGroup, Validator, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppComponent } from '../app.component';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * this class is used for getting username and password and set token in local storage
 */

export class LoginComponent implements OnInit {
  OneSignal;
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
  constructor(private modalService: BsModalService, private service: HttpService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required, Validators.minLength(3), Validators.maxLength(20)],
      password: ['', Validators.required]
    });
    this.disabld = this.form.valid;
   }

  ngOnInit() {
   /*  this.OneSignal = window['OneSignal'] || [];
    this.OneSignal.push(function () {
      this.OneSignal.init({
        appId: "52bcd1f1-af26-4d91-966d-a7a05ae69f8b",
      });
    });
 */

  }
  /**
   * take the user's input (username & password) from the input form and set token
   */
  login() {
    const val = this.form.value;
    this.service.login(val.username, val.password).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('navbar', 'true');
      this.router.navigateByUrl('');
        window.location.reload();

    

    },
      err => {
        if (err.status === 422) {
          this.router.navigateByUrl('#');
          console.log('error');
        }

      }, 
      ()=>{
        
    /*   this.OneSignal.push(function () {

        var isPushSupported = this.OneSignal.isPushNotificationsSupported();
        if (isPushSupported) {
          // Push notifications are supported
          console.log(' Push notifications are supported');
          this.OneSignal.isPushNotificationsEnabled(function (isEnabled) {
            if (isEnabled) {
              console.log("Push notifications are enabled!");
              this.OneSignal.getUserId(function (userId) {
                console.log("OneSignal User ID:", userId);
                // (Output) OneSignal User ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316    
              });
              this.OneSignal.sendTags({ user_name: 'mahmood' });
              this.OneSignal.on('notificationDisplay', function (event) {
                console.warn('OneSignal notification displayed:', event);



              });
            }
            else {
              console.log("Push notifications are not enabled yet.");
              this.OneSignal.push(function () {
                this.OneSignal.showSlidedownPrompt();
              });
            }
          });

        } else {
          // Push notifications are not supported
          console.log(' Push notifications are not supported');
        }
     
      }); */
      }
      
      );


  }
  /**
   * supposed to open sign up page as pop up
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }


}
