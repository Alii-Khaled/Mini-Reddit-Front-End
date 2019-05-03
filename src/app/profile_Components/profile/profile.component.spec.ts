import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { By } from '@angular/platform-browser';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.username = 'AHmed';
    component.PublicInfo.username = 'Ahmed';
    component.PublicInfo.name = 'AHmed';
    component.PublicInfo.karma = 3;
    component.PublicInfo.cake_day = '23-April-2019';
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query( By.css('#name')).nativeElement;
    expect(titleElement.innerText).toContain('AHmed');
});
});
