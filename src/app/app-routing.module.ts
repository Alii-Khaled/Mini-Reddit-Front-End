import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Profile_Components/profile/profile.component';
import { CommunityComponent } from './community/community.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { OverviewComponent } from './Profile_Components/overview/overview.component';
import { PostsComponent } from './Profile_Components/posts/posts.component';
import { CommentsComponent } from './Profile_Components/comments/comments.component';
import { SavedComponent } from './Profile_Components/saved/saved.component';
import { HiddenComponent } from './Profile_Components/hidden/hidden.component';
import { UpvotedComponent } from './Profile_Components/upvoted/upvoted.component';
import { DownvotedComponent } from './Profile_Components/downvoted/downvoted.component';
import { EditCommunityComponent } from './edit-community/edit-community.component';

const routes: Routes = [

  { path: './account-setting', component: AccountSettingComponent },
  { path: './profile-setting', component: ProfileSettingComponent },
  { path: './login', component: LoginComponent },
  { path: './signup', component: SignupComponent},
  { path: './forgot-username', component: ForgotUsernameComponent},
  { path: 'user/:username', component: ProfileComponent ,
    children: [
      { path: '', component: OverviewComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'saved', component: SavedComponent },
      { path: 'hidden', component: HiddenComponent },
      { path: 'upvoted', component: UpvotedComponent },
      { path: 'downvoted', component: DownvotedComponent },
    ]
  },
  { path: 'community/:CommunityName', component: CommunityComponent ,
    children: [
        {path: 'Edit_community', component: EditCommunityComponent}
    ]
  },
  { path: 'settings', component: UserSettingsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
