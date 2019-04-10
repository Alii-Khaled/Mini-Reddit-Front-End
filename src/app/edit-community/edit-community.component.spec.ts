import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommunityComponent } from './edit-community.component';

describe('EditCommunityComponent', () => {
  let component: EditCommunityComponent;
  let fixture: ComponentFixture<EditCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
