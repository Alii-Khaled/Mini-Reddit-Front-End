import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { PostsObjects } from 'src/app/classes/posts-objects';
import { AppModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA , CUSTOM_ELEMENTS_SCHEMA]
      

    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should change buttonname to SUBSCRIBE if input is false', () => {
    let fixture = TestBed.createComponent(CommunityComponent);
    let app = fixture.debugElement.componentInstance;
    app.toggleButton(false);
    expect(app.buttonName).toBe('SUBSCRIBE');
  });

  it('should contain', () => {
    component.Community = {
      'name': '7moda',
      'banner': '7moda basta',
      'desription': 'hhhhhhhhhhhhhhh',
      'rules': 'enta doctor ?tab t3ala akshef 3laya',
      'num_subscribes': 789,
      'subscribed': true,
      'moderator': false,
      'logo': 'ajasnkas'
    };
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query(By.css('#Name')).nativeElement;
    expect(titleElement.innerText).toContain('7moda');
  });


  it('should contain', () => {
    component.Community = {
      'name': '7moda',
      'banner': '7moda basta',
      'desription': 'hhhhhhhhhhhhhhh',
      'rules': 'enta doctor ?tab t3ala akshef 3laya',
      'num_subscribes': 789,
      'subscribed': true,
      'moderator': false,
      'logo': 'ajasnkas'
    };
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query(By.css('#Bio')).nativeElement;
    expect(titleElement.innerText).toContain('hhhhhhhhhhhhhhh');
  });


  it('should contain', () => {
    component.Community = {
      'name': '7moda',
      'banner': '7moda basta',
      'desription': 'hhhhhhhhhhhhhhh',
      'rules': 'enta doctor ?tab t3ala akshef 3laya',
      'num_subscribes': 789,
      'subscribed': true,
      'moderator': false,
      'logo': 'ajasnkas'
    };
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query(By.css('#ruless')).nativeElement;
    expect(titleElement.innerText).toContain('enta doctor ?tab t3ala akshef 3laya');
  });


});
 */