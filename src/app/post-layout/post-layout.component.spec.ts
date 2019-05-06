/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLayoutComponent } from './post-layout.component';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

describe('PostLayoutComponent', () => {
  let component: PostLayoutComponent;
  let fixture: ComponentFixture<PostLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test for button save and unsave
  it('#save() should change posts.saved to true and unsave() to change it to false', () => {
    expect(component.posts.saved).toBe(false, 'not saved at first');
    component.save();
    expect(component.posts.saved).toBe(true, 'saved after click');
    component.unsave();
    expect(component.posts.saved).toBe(false, 'not saved after second click');
  });

  // test for button save and unsave
  it('#hide() should change posts.saved to true and unhide() to change it to false', () => {
    expect(component.posts.hidden).toBe(false, 'not hidden at first');
    component.hide();
    expect(component.posts.hidden).toBe(true, 'hidden after click');
    component.unhide();
    expect(component.posts.hidden).toBe(false, 'not hidden after second click');
  });
});
 */