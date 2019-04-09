import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvotedComponent } from './upvoted.component';

describe('UpvotedComponent', () => {
  let component: UpvotedComponent;
  let fixture: ComponentFixture<UpvotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvotedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
