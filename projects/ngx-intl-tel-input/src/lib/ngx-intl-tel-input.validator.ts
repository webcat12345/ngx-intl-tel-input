import {FormControl} from '@angular/forms';
import * as lpn from 'google-libphonenumber';

export const phoneNumberValidator = (control: FormControl) => {
  const id = control && control.value && control.value.id ? control.value.id : 'phone';
  const input = document.getElementById(id);
  if (!input) {
    return;
  }
  const isCheckValidation = document.getElementById(id).getAttribute('validation');
  if (isCheckValidation === 'true') {
    const isRequired = control.errors && control.errors.required === true;
    const error = {invalidPhoneNumber: 'Phone number is invalid'};
    let number: lpn.PhoneNumber;

    try {
      number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
    } catch (e) {
      if (isRequired === true) {
        return error;
      }
    }

    if (control.value) {
      if (!number) {
        return error;
      } else {
        if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
          return error;
        }
      }
    }
  } else if (isCheckValidation === 'false') {
    control.clearValidators();
  }
  return;

};
