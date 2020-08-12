import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';

export const dropdownModuleForRoot: ModuleWithProviders<BsDropdownModule> = BsDropdownModule.forRoot();
export const tooltipModuleForRoot: ModuleWithProviders<TooltipModule> = TooltipModule.forRoot();

@NgModule({
	declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		dropdownModuleForRoot,
		tooltipModuleForRoot,
  ],
	exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
})
export class NgxIntlTelInputModule {

}
