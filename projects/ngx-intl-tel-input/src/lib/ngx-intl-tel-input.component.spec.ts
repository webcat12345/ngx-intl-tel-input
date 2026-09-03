import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';

describe('NgxIntlTelInputComponent', () => {
  let component: NgxIntlTelInputComponent;
  let fixture: ComponentFixture<NgxIntlTelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxIntlTelInputComponent],
      imports: [CommonModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIntlTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the dropdown unless disabled', () => {
    const event = new MouseEvent('click');

    component.toggleDropdown(event);
    expect(component.dropdownOpen).toBeTrue();

    component.dropdownOpen = false;
    component.disabled = true;
    component.toggleDropdown(event);
    expect(component.dropdownOpen).toBeFalse();
  });

  it('should close the dropdown when clicking outside', () => {
    component.dropdownOpen = true;

    component.closeDropdown({ target: document.body } as unknown as MouseEvent);

    expect(component.dropdownOpen).toBeFalse();
  });

  it('should close another component dropdown when opening one', () => {
    const secondFixture = TestBed.createComponent(NgxIntlTelInputComponent);
    secondFixture.detectChanges();

    const firstToggle = fixture.nativeElement.querySelector('.iti__selected-flag');
    const secondToggle = secondFixture.nativeElement.querySelector('.iti__selected-flag');

    firstToggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.iti__dropdown-content')).toBeTruthy();

    secondToggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    secondFixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.iti__dropdown-content')).toBeNull();
    expect(secondFixture.nativeElement.querySelector('.iti__dropdown-content')).toBeTruthy();
  });

  it('should close the dropdown when the telephone input is clicked', () => {
    const toggle = fixture.nativeElement.querySelector('.iti__selected-flag');
    const telephoneInput = fixture.nativeElement.querySelector('.iti__tel-input');

    toggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.iti__dropdown-content')).toBeTruthy();

    telephoneInput.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.iti__dropdown-content')).toBeNull();
  });
});
