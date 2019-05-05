import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { EditCommunityComponent } from './edit-community.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
describe('EditCommunityComponent', () => {
  let component: EditCommunityComponent;
  let fixture: ComponentFixture<EditCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should contain name using ngModel', () => {
    component.commname = '7moda';
    fixture.detectChanges();
    const inputDe = fixture.debugElement.query(By.css('#namett'));
    const inputEl = inputDe.nativeElement;
    inputEl.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const titleElement: HTMLElement = fixture.debugElement.query(By.css('#namett')).nativeElement;
      expect(titleElement.innerText).toContain('7moda');
    });
   
  });


  it('should keep input and commname in sync -- with async method', async(() => {
    const fixture = TestBed.createComponent(EditCommunityComponent);
    fixture.detectChanges();
    const inputDe = fixture.debugElement.query(By.css('#namett'));
    const inputEl = inputDe.nativeElement;
    inputEl.value = 'Updated Task 1';
    inputEl.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.commname).toEqual('Updated Task 1');
    });
  }));

  it('should contain rules using ngModel', () => {
    component.rules = 'rules';
    fixture.detectChanges();
    const inputDe = fixture.debugElement.query(By.css('#rules'));
    const inputEl = inputDe.nativeElement;
    inputEl.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const titleElement: HTMLElement = fixture.debugElement.query(By.css('#rules')).nativeElement;
      expect(titleElement.innerText).toContain('rules');
    });
   
  });
  it('should contain bio using ngModel', () => {
    component.bio = 'bio';
    fixture.detectChanges();
    const inputDe = fixture.debugElement.query(By.css('#inputabout'));
    const inputEl = inputDe.nativeElement;
    inputEl.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const titleElement: HTMLElement = fixture.debugElement.query(By.css('#inputabout')).nativeElement;
      expect(titleElement.innerText).toContain('bio');
    });
   
  });

});
 */