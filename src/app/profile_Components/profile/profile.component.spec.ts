import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../app.module';
import { ProfileComponent } from './profile.component';
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         AppModule
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('detect name', () => {
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
    const titleElement: HTMLElement = fixture.debugElement.query( By.css('#name')).nativeElement;
    expect(titleElement.innerText).toEqual('u/7moda basta');
});
  it('detect cake_day', () => {
  component.publicInfo = {
    username: '7moda',
    name: '7moda basta',
    karma: 500,
    cake_day: '8-12-2019',
    about: 'be or not to be',
    photo_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4',
    cover_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4'
  };
  fixture.detectChanges();
  const titleElement: HTMLElement = fixture.debugElement.query( By.css('#cake')).nativeElement;
  expect(titleElement.innerText).toEqual('8-12-2019');
});
  it('detect karma', () => {
  component.publicInfo = {
    username: '7moda',
    name: '7moda basta',
    karma: 500,
    cake_day: '8-12-2019',
    about: 'be or not to be',
    photo_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4',
    cover_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4'
  };
  fixture.detectChanges();
  const titleElement: HTMLElement = fixture.debugElement.query( By.css('#karma')).nativeElement;
  expect(titleElement.innerText).toEqual('500');
});
  it('if it is a user that i am not following him then the button will be for follow', () => {
  component.publicInfo = {
    username: '7moda',
    name: '7moda basta',
    karma: 500,
    cake_day: '8-12-2019',
    about: 'be or not to be',
    photo_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4',
    cover_path: 'https://avatars1.githubusercontent.com/u/47671499?s=400&v=4'
  };
  fixture.detectChanges();
  localStorage.setItem('username', '7moda');
  fixture.whenStable().then(() => {
    expect(component.cardButton).toEqual('FOLLOW');
});
});
  it('should call cardButtonClick function', () => {
  spyOn(component, 'cardButtonClick');
  let btn = fixture.debugElement.query(By.css('#card-button'));
  btn.triggerEventHandler('click', null);
  fixture.whenStable().then(() => {
  expect(component.cardButtonClick).toHaveBeenCalledWith(1);
});
});
  it('isFromMyFollowers must return false as this user is not from my followers ', () => {
  component.username = 'Ahmed';
  component.myFollowing = ['ali' , 'alaa'];
  fixture.detectChanges();
  let a = component.isFromMyFollowers();
  fixture.detectChanges();
  expect(a).toBe(false);
});
});
