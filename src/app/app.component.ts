import { CountryISO } from 'projects/ngx-custom-intl-tel/src/lib/enums/country-iso.enum';
import { SearchCountryField } from 'projects/ngx-custom-intl-tel/src/lib/enums/search-country-field.enum';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeData, PhoneNumberFormat } from 'projects/ngx-custom-intl-tel/src/public_api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [
		CountryISO.UnitedStates,
		CountryISO.UnitedKingdom,
	];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required]),
	});

	changedValue: ChangeData;

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

	onValueChange(event) {
		this.changedValue = event;
	}
}
