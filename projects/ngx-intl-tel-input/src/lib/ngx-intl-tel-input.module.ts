import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputService } from './ngx-intl-tel-input.service';

@NgModule({
	declarations: [NgxIntlTelInputComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BsDropdownModule.forRoot()
	],
	exports: [NgxIntlTelInputComponent]
})
export class NgxIntlTelInputModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: NgxIntlTelInputModule,
			providers: [NgxIntlTelInputService]
		};
	}
}
