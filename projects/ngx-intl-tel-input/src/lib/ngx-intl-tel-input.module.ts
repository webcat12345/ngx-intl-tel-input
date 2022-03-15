import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NativeElementInjectorDirective } from "../public_api";
import { NgxIntlTelInputComponent } from "./ngx-intl-tel-input.component";

export const dropdownModuleForRoot: ModuleWithProviders<BsDropdownModule> =
	BsDropdownModule.forRoot();

@NgModule({
	declarations: [NgxIntlTelInputComponent,  NativeElementInjectorDirective],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		dropdownModuleForRoot,
	],
	exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
})
export class NgxIntlTelInputModule {}
