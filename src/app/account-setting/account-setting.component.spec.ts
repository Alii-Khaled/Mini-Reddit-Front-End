import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingComponent } from './account-setting.component';

import { AppModule} from '../app.module';

describe('AccountSettingComponent', () => {
  let component: AccountSettingComponent;
  let fixture: ComponentFixture<AccountSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [AppModule],
      declarations: [ AccountSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
