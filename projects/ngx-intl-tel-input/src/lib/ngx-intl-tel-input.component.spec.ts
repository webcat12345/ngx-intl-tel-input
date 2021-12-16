import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { FormsModule } from '@angular/forms';

describe('NgxIntlTelInputComponent', () => {
	let component: NgxIntlTelInputComponent;
	let fixture: ComponentFixture<NgxIntlTelInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: 
			[ 
				NgxIntlTelInputComponent
			 ],
			imports: [
				FormsModule
			 ],
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
