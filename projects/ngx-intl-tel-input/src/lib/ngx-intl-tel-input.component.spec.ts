import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';

describe('NgxIntlTelInputComponent', () => {
	let component: NgxIntlTelInputComponent;
	let fixture: ComponentFixture<NgxIntlTelInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgxIntlTelInputComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxIntlTelInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
