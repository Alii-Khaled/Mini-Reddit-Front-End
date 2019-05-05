import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityModeratorsComponent } from './community-moderators.component';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';

describe('CommunityModeratorsComponent', () => {
  let component: CommunityModeratorsComponent;
  let fixture: ComponentFixture<CommunityModeratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppModule,

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityModeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /*  it('should change buttonname to SUBSCRIBE if input is false', () => {
    let fixture = TestBed.createComponent(CommunityModeratorsComponent);
    let app = fixture.debugElement.componentInstance;
    app.onAdding();
    expect(app.buttonName).toBe('SUBSCRIBE');
  }); */

/*   it('should contain', () => {
    component.moderators[0]= {
      
      'moderator_username': '7moda',
      'moderator_photo': '7moda basta',
      
    };
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query( By.css('#usernameeeq')).nativeElement;
    expect(titleElement.innerText).toContain('7moda');
});
 */
});
