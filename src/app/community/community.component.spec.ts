/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsObjects } from 'src/app/classes/posts-objects';
describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommunityComponent,
        PostsObjects
      ],
    });
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change buttonname to SUBSCRIBED if input is true', () => {
    let fixture = TestBed.createComponent(CommunityComponent);
    let app = fixture.debugElement.componentInstance;
    app.toggleButton(true);
    expect(app.buttonName).toBe('SUBSCRIBED');
  });

  it('should change buttonname to SUBSCRIBE if input is false', () => {
    let fixture = TestBed.createComponent(CommunityComponent);
    let app = fixture.debugElement.componentInstance;
    app.toggleButton(false);
    expect(app.buttonName).toBe('SUBSCRIBE');
  });




});
 */