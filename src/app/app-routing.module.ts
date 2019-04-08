import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './community/community.component';
<<<<<<< HEAD
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ForgotUsernameComponent } from './forgot-username/forgot-username.component'

const routes: Routes = [

  { path: 'profile/:username', component: ProfileComponent },
  { path: 'community/:CommunityName', component: CommunityComponent },
  { path: './account-setting', component: AccountSettingComponent },
  { path: './profile-setting', component: ProfileSettingComponent },
  { path: './login', component: LoginComponent },
  { path: './signup', component: SignupComponent},
  { path: './forgot-username', component: ForgotUsernameComponent}


=======
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  { path: 'user/:username', component: ProfileComponent },
  { path: 'community/:CommunityName', component: CommunityComponent },
  { path: 'settings', component: UserSettingsComponent }
>>>>>>> profile
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
