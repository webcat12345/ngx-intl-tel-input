import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputService } from './ngx-intl-tel-input.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
	declarations: [NgxIntlTelInputComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot()
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
