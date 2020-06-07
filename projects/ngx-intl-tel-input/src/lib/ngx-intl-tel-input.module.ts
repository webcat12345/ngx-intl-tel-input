import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { NgxIntlTelInputService } from './ngx-intl-tel-input.service';

@NgModule({
	declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot(),
	],
	exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
})
export class NgxIntlTelInputModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: NgxIntlTelInputModule,
			providers: [NgxIntlTelInputService],
		};
	}
}
