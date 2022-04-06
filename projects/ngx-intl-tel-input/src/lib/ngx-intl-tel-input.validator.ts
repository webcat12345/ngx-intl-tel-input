import * as lpn from 'google-libphonenumber';

/*
We use "control: any" instead of "control: FormControl" to silence:
"Property 'nativeElement' does not exist on type 'FormControl'".
This happens because I've expanded control with nativeElement via
'NativeElementInjectorDirective' to get an access to the element.
More about this approach and reasons for this:
https://github.com/angular/angular/issues/18025
https://stackoverflow.com/a/54075119/1617590
*/
export const phoneNumberValidator = (control: any) => {
	if (!control.value) {
		return;
	}
	// Find <input> inside injected nativeElement and get its "id".
	const el: HTMLElement = control.nativeElement as HTMLElement;
	const inputBox: HTMLInputElement | any = el
		? el.querySelector('input[type="tel"]')
		: undefined;
	if (inputBox) {
		const id = inputBox.id;
		const isCheckValidation = inputBox.getAttribute('validation');
		if (isCheckValidation === 'true') {
			const isRequired = control.errors && control.errors.required === true;
			const error = { validatePhoneNumber: { valid: false } };

			inputBox.setCustomValidity('Invalid field.');

			let number: lpn.PhoneNumber;

			try {
				number = lpn.PhoneNumberUtil.getInstance().parse(
					control.value.number,
					control.value.countryCode
				);
			} catch (e) {
				if (isRequired) {
					return error;
				} else {
					inputBox.setCustomValidity('');
				}
			}

			if (control.value) {
				// @ts-ignore
        if (!number) {
					return error;
				} else {
					if (
						!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(
							number,
							control.value.countryCode
						)
					) {
						return error;
					} else {
						inputBox.setCustomValidity('');
					}
				}
			}
		} else if (isCheckValidation === 'false') {
			inputBox.setCustomValidity('');

			control.clearValidators();
		}
	}
	return;
};
