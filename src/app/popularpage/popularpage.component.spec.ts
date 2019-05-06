import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpageComponent } from './popularpage.component';

describe('PopularpageComponent', () => {
  let component: PopularpageComponent;
  let fixture: ComponentFixture<PopularpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
