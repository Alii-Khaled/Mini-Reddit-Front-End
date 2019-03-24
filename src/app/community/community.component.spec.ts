import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityComponent } from './community.component';

describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app',async( () => {
    let fixture=TestBed.createComponent(CommunityComponent);
    let comm =fixture.debugElement.componentInstance;
    expect(comm).toBeTruthy();
  }));
  
  /* it('should render BannerBar with bg color blue',async( () => {
    let fixture=TestBed.createComponent(CommunityComponent);
    fixture.detectChanges();
    let compiled =fixture.debugElement.nativeElement;
    expect(compiled.querySelector).toBeTruthy();
  }
   */
  
  
  
});
