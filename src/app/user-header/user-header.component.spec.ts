import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHeaderComponent } from './user-header.component';
import { HttpClientModule} from '@angular/common/http';
import { By, BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule,
   MatSidenavModule, MatListModule, MatStepperModule, MatInputModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA , DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ProfileComponent } from '../profile_Components/profile/profile.component';
import { CommunityComponent } from '../community/community.component';
import { PostLayoutComponent } from '../post-layout/post-layout.component';
import {AppModule } from '../app.module';
import { AccountSettingComponent } from '../account-setting/account-setting.component';
import {ProfileSettingComponent} from '../profile-setting/profile-setting.component';
import {ForgotUsernameComponent} from '../forgot-username/forgot-username.component';
import {OverviewComponent} from '../profile_Components/overview/overview.component';
import { PostsComponent } from '../profile_Components/posts/posts.component';
import { CommentsComponent } from '../profile_Components/comments/comments.component';
import { SavedComponent } from '../profile_Components/saved/saved.component';
import { HiddenComponent } from '../profile_Components/hidden/hidden.component';
import { UpvotedComponent } from '../profile_Components/upvoted/upvoted.component';
import { DownvotedComponent } from '../profile_Components/downvoted/downvoted.component';
import { EditCommunityComponent } from '../edit-community/edit-community.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';
import {NextPageComponent} from '../next-page/next-page.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { HomepageComponent } from '../homepage/homepage.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { CommunityModeratorsComponent } from '../community-moderators/community-moderators.component';

describe('UserHeaderComponent', () => {
  let component: UserHeaderComponent;
  let fixture: ComponentFixture<UserHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        RouterModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule ,
        MatStepperModule,
        MatInputModule,
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        ModalModule.forRoot(),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        MatButtonToggleModule,
         //AppModule
    ],

      declarations: [
        EditCommunityComponent,
        PostsComponent,
        CommentsComponent,
        SavedComponent,
        HiddenComponent,
        UpvotedComponent,
        DownvotedComponent,
        UserSettingsComponent,
        UserHeaderComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent,
        CommunityComponent,
        AccountSettingComponent,
        ProfileSettingComponent,
        ForgotUsernameComponent,
        OverviewComponent,
        NextPageComponent,
        PostLayoutComponent,
        HomepageComponent,
        PrivacyComponent,
        CommunityModeratorsComponent,
     ],

      // schemas: [NO_ERRORS_SCHEMA , CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // TestBed.resetTestEnvironment();
    // TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    // platformBrowserDynamicTesting());
    fixture = TestBed.createComponent(UserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.publicInfo = {
      'username': '7moda',
      'name': '7moda basta',
      'karma': 500,
      'cake_day': 'March 8, 2019',
      'about': 'be or not to be',
      'photo_path': 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4',
      'cover_path': 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4'
    };
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query( By.css('#UserName')).nativeElement;
    expect(titleElement.innerText).toContain('7moda');
});
});
