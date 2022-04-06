import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

/*
"Property 'nativeElement' does not exist on type 'FormControl'".
'NativeElementInjectorDirective' injects nativeElement to each control,
so we can access it from inside validator for example.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
@Directive({
	// tslint:disable-next-line: directive-selector
	selector: '[ngModel], [formControl], [formControlName]',
})
export class NativeElementInjectorDirective implements OnInit {
	constructor(
		private controlDir: NgControl,
		private host: ElementRef<HTMLFormElement>
	) {}
	ngOnInit() {
		if (this.controlDir.control) {
			// @ts-ignore
      this.controlDir.control['nativeElement'] = this.host.nativeElement;
		}
	}
}
