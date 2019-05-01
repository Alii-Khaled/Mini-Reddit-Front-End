import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile_Components/profile/profile.component';
import { CommunityComponent } from './community/community.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { OverviewComponent } from './profile_Components/overview/overview.component';
import { PostsComponent } from './profile_Components/posts/posts.component';
import { CommentsComponent } from './profile_Components/comments/comments.component';
import { SavedComponent } from './profile_Components/saved/saved.component';
import { HiddenComponent } from './profile_Components/hidden/hidden.component';
import { UpvotedComponent } from './profile_Components/upvoted/upvoted.component';
import { DownvotedComponent } from './profile_Components/downvoted/downvoted.component';
import { EditCommunityComponent } from './edit-community/edit-community.component';
import { CommunityModeratorsComponent } from './community-moderators/community-moderators.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  { path: '', component: HomepageComponent},
  { path: 'account-setting', component: AccountSettingComponent },
  { path: 'profile-setting', component: ProfileSettingComponent },
  { path: 'forgot-username', component: ForgotUsernameComponent },
  {
    path: 'user/:username', component: ProfileComponent,
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
  { path: 'community/:CommunityName', component: CommunityComponent },
  { path: 'community/:CommunityName/Edit_community', component: EditCommunityComponent },
  { path: 'community/:CommunityName/Moderators', component: CommunityModeratorsComponent },
  { path: 'settings', component: UserSettingsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
