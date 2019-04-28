import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserHeaderComponent } from './user-header/user-header.component';
import { CommunityComponent } from './community/community.component';
import {MatSnackBarModule} from '@angular/material';


import {MatDialogModule} from '@angular/material';
import { ProfileComponent } from './Profile_Components/profile/profile.component';
import { PostLayoutComponent } from './post-layout/post-layout.component';
import { MatButtonModule,MatButtonToggleModule } from '@angular/material';
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
import { EditCommunityComponent } from './edit-community/edit-community.component';

import { UserSettingsComponent } from './user-settings/user-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';



import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { OverviewComponent } from './Profile_Components/overview/overview.component';
import { PostsComponent } from './Profile_Components/posts/posts.component';
import { CommentsComponent } from './Profile_Components/comments/comments.component';
import { SavedComponent } from './Profile_Components/saved/saved.component';
import { HiddenComponent } from './Profile_Components/hidden/hidden.component';
import { UpvotedComponent } from './Profile_Components/upvoted/upvoted.component';
import { DownvotedComponent } from './Profile_Components/downvoted/downvoted.component';
import { CommentsLayoutComponent } from './comments-layout/comments-layout.component';
import { from } from 'rxjs';
import { NextPageComponent } from './next-page/next-page.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
import { CommunityModeratorsComponent } from './community-moderators/community-moderators.component';
import { ViewSinglePostComponent } from './view-single-post/view-single-post.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DeactivateAccountComponent } from './deactivate-account/deactivate-account.component';

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
    EditCommunityComponent,
    UserSettingsComponent,
    AccountSettingComponent,
    ProfileSettingComponent,
    ForgotUsernameComponent,
    OverviewComponent,
    PostsComponent,
    CommentsComponent,
    SavedComponent,
    HiddenComponent,
    UpvotedComponent,
    DownvotedComponent,
    CommentsLayoutComponent,
    NextPageComponent,
    ConfirmationDialogComponent,
    CommunityModeratorsComponent,
    ViewSinglePostComponent,
    ForgotPasswordComponent,
    DeactivateAccountComponent,
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
    MatButtonToggleModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule,
    MatSnackBarModule,
    MatDialogModule,
  
   
    // Http,
    // Headers,
    // RequestOptions
    // HttpHeaders,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
