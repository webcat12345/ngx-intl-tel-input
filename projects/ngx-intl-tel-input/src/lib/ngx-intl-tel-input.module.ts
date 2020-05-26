import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { NgxIntlTelInputService } from './ngx-intl-tel-input.service';

@NgModule({
	declarations: [NgxIntlTelInputComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot(),
	],
	exports: [NgxIntlTelInputComponent],
})
export class NgxIntlTelInputModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: NgxIntlTelInputModule,
			providers: [NgxIntlTelInputService],
		};
	}
}
