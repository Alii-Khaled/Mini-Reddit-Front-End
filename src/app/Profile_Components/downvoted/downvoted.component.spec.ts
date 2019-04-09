import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownvotedComponent } from './downvoted.component';

describe('DownvotedComponent', () => {
  let component: DownvotedComponent;
  let fixture: ComponentFixture<DownvotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownvotedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownvotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
