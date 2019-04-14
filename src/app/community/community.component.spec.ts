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
  
  describe('toggleButton',()=>{
    it('should change buttonname to SUBSCRIBE if input is true',()=>{
      this.toggleButton(true);
      expect(this.buttonName).toBe('SUBSCRIBED');
    })
  })
  
  
  
});
