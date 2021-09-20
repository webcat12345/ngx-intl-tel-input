import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NativeElementInjectorDirective } from "./directives/native-element-injector.directive";
import { NgxIntlTelInputComponent } from "./ngx-intl-tel-input.component";

@NgModule({
	declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbDropdownModule],
	exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
})
export class NgxIntlTelInputModule {}
