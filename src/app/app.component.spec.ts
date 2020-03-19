import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxIntlTelInputModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-intl-tel-input-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngx-intl-tel-input-app');
  });

  it('should render title in a h3 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(
      'Test International Telephone Input Form'
    );
  });
});
