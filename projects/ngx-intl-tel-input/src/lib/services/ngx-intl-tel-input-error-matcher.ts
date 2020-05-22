import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class NgxIntlTelInputErrorMatcher implements ErrorStateMatcher {
  constructor(private customControl: FormControl) {
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(this.customControl && this.customControl.invalid
      && ((this.customControl.dirty && this.customControl.touched) || isSubmitted));
  }
}
