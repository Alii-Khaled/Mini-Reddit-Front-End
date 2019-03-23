import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHeaderComponent } from './user-header.component';
import { HttpClientModule} from '@angular/common/http';

describe('UserHeaderComponent', () => {
  let component: UserHeaderComponent;
  let fixture: ComponentFixture<UserHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ UserHeaderComponent ]
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

  it('should create', () => {
    component.PublicInfo = {
      "username": "7moda",
      "name": "7moda basta",
      "karma": 500,
      "cake_day": "March 8, 2019",
      "about": "be or not to be",
      "photo_path": "https://avatars1.githubusercontent.com/u/47671499?s=400&v=4",
      "cover_path": "https://avatars1.githubusercontent.com/u/47671499?s=400&v=4"
    };
});
});
