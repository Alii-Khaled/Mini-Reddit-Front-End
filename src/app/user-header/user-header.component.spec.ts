import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserHeaderComponent } from './user-header.component';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';
describe('UserHeaderComponent', () => {
  let component: UserHeaderComponent;
  let fixture: ComponentFixture<UserHeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         AppModule
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('check username', () => {
    component.publicInfo = {
      username: '7moda',
      name: '7moda basta',
      karma: 500,
      cake_day: 'March 8, 2019',
      about: 'be or not to be',
      photo_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4',
      cover_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4'
    };
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.debugElement.query( By.css('#UserName')).nativeElement;
    expect(titleElement.innerText).toContain('7moda');
});
  it('check karma', () => {
  component.publicInfo = {
    username: '7moda',
    name: '7moda basta',
    karma: 500,
    cake_day: 'March 8, 2019',
    about: 'be or not to be',
    photo_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4',
    cover_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4'
  };
  fixture.detectChanges();
  const titleElement: HTMLElement = fixture.debugElement.query( By.css('#karm')).nativeElement;
  expect(titleElement.innerText).toContain('500');
});
  it('calling logout function', () => {
  spyOn(component, 'logout');
  let btn = fixture.debugElement.query(By.css('#logout'));
  btn.triggerEventHandler('click', null);
  fixture.whenStable().then(() => {
    expect(component.logout).toHaveBeenCalledWith(1);
  });
});
  it('calling dropdown function', () => {
  spyOn(component, 'onclickLeftDropdown');
  let btn = fixture.debugElement.query(By.css('#left-dropdown-button'));
  btn.triggerEventHandler('click', null);
  fixture.whenStable().then(() => {
  expect(component.onclickLeftDropdown).toHaveBeenCalledWith(1);
  });
});
});


