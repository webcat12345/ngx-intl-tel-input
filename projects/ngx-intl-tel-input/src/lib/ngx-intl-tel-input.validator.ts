import { FormControl } from '@angular/forms';
import * as lpn from 'google-libphonenumber';

export const phoneNumberValidator = (control: FormControl) => {
	const isRequired = control.errors && control.errors.required === true;
	const error = { validatePhoneNumber: { valid: false } };
	let number: lpn.PhoneNumber;

	try {
		number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
	} catch (e) {
		if (isRequired === true) { return error; }
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

	return;
};
