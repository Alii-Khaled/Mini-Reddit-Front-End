import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'community/:CommunityName', component: CommunityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
