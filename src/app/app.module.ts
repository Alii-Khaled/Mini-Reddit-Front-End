import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserHeaderComponent } from './user-header/user-header.component';
import { CommunityComponent } from './community/community.component';
import { ProfileComponent } from './profile/profile.component';
import { PostLayoutComponent } from './post-layout/post-layout.component';
import { MatButtonModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// import {Headers} from '@angular/http';
// import {HttpHeaders} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserHeaderComponent,
    CommunityComponent,
    ProfileComponent,
    PostLayoutComponent,
    LoginComponent,
    SignupComponent,
    /* ModalModule */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    // Http,
    // Headers, 
    // RequestOptions,
    // HttpHeaders,
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
