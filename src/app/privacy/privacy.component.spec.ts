import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { PrivacyComponent } from './privacy.component';
describe('PrivacyComponent', () => {
  let component: PrivacyComponent;
  let fixture: ComponentFixture<PrivacyComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         AppModule
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add function', () => {
    component.username = '';
    spyOn(component, 'add');
    let btn = fixture.debugElement.query(By.css('#add'));
    btn.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
    expect(component.add).toHaveBeenCalledWith(1);
  });
  });
  it('shouldnot add the empty username to blocked list', () => {
    component.username = '';
    let btn = fixture.debugElement.query(By.css('#add'));
    btn.triggerEventHandler('click', null);
    expect(component.message).toEqual('please enter username first to be blocked');
  });

  it('user shouldnot add himself to his blocked list', () => {
    component.username = 'lokok';
    localStorage.setItem('username', 'lokok');
    component.message = '';
    let btn = fixture.debugElement.query(By.css('#add'));
    btn.triggerEventHandler('click', null);
    expect(component.message).toEqual('you cannot block yourself :)');
  });
});
