import { CountryISO } from 'projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum';
import { SearchCountryField } from 'projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneNumberFormat } from 'projects/ngx-intl-tel-input/src/public_api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public separateDialCode = true;
	public searchField = SearchCountryField;
	public countries = CountryISO;

	public preferredCountries: CountryISO[] = [
		CountryISO.UnitedStates,
		CountryISO.UnitedKingdom,
	];

	public phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required]),
	});

	public get f() {
		return this.phoneForm.controls;
	}

	public changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}
}
