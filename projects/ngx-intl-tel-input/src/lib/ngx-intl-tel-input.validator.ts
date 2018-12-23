import {FormControl} from '@angular/forms';
import * as lpn from 'google-libphonenumber';

export function phoneNumberValidator(c: FormControl) {
  const err = {
    validatePhoneNumber: {
      valid: false
    }
  };

  let number = null;
  try {
    number = lpn.PhoneNumberUtil.getInstance().parse(c.value.number, c.value.countryCode);
  } catch (e) {
    return err;
  }

  if (number !== null) {
    if (!lpn.PhoneNumberUtil.getInstance().isValidNumber(number)) {
      return err;
    }
  } else {
    return err;
  }

  return null;
}
