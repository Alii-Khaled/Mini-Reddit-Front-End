import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { MatButtonModule,MatButtonToggleModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityComponent ],
      imports: [
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        RouterModule,
        ActivatedRoute

     ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async( () => {
    let fixture = TestBed.createComponent(CommunityComponent);
    let comm = fixture.debugElement.componentInstance;
    expect(comm).toBeTruthy();
  }));

  describe('toggleButton', () => {
    it('should change buttonname to SUBSCRIBED if input is true',()=>{
      this.toggleButton(true);
      expect(this.buttonName).toBe('SUBSCRIBED');
    });
    it('should change buttonname to SUBSCRIBE if input is false',()=>{
      this.toggleButton(false);
      expect(this.buttonName).toBe('SUBSCRIBE');
    });
  });

});
