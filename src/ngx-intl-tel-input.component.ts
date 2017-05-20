import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { CountryCode } from './resource/country-code';
import { Country } from './model/country.model';
import * as _ from 'google-libphonenumber';

@Component({
  selector: 'ngx-intl-tel-input',
  templateUrl: './ngx-intl-tel-input.component.html',
  styleUrls: ['./ngx-intl-tel-input.component.css'],
  providers: [CountryCode]
})
export class NgxIntlTelInputComponent implements OnInit {
  @Input() value = '';
  @Input() preferredCountries: Array<string> = [];
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  phone_number = '';
  allCountries: Array<Country> = [];
  preferredCountriesInDropDown: Array<Country> = [];
  selectedCountry: Country = new Country();
  constructor(
      private countryCodeData: CountryCode
  ) {
    this.fetchCountryData();
  }

  ngOnInit() {
    if (this.preferredCountries.length) {
      this.preferredCountries.forEach(iso2 => {
        let preferredCountry = this.allCountries.filter((c) => {
          return c.iso2 === iso2;
        });
        this.preferredCountriesInDropDown.push(preferredCountry[0]);
      });
    }
    if (this.preferredCountriesInDropDown.length) {
      this.selectedCountry = this.preferredCountriesInDropDown[0];
    } else {
      this.selectedCountry = this.allCountries[0];
    }
  }

  public onPhoneNumberChange(): void {
    this.value = this.selectedCountry.dialCode + this.phone_number;
    this.valueChange.emit(this.value);
  }

  public onCountrySelect(country: Country, el): void {
    this.selectedCountry = country;
    if (this.phone_number.length > 0) {
      this.value = this.selectedCountry.dialCode + this.phone_number;
      this.valueChange.emit(this.value);
    }
    el.focus();
  }

  public onInputKeyPress(event): void {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  protected fetchCountryData(): void {
    this.countryCodeData.allCountries.forEach(c => {
      let country = new Country();
      country.name = c[0].toString();
      country.iso2 = c[1].toString();
      country.dialCode = c[2].toString();
      country.priority = +c[3] || 0;
      country.areaCode = +c[4] || null;
      country.flagClass = country.iso2.toLocaleLowerCase();
      country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
      this.allCountries.push(country);
    });
  }

  protected getPhoneNumberPlaceHolder(countryCode: string): string {
    const phoneUtil = _.PhoneNumberUtil.getInstance();
    const pnf = _.PhoneNumberFormat;
    try {
      let phoneNumber = phoneUtil.parse('2236512366', countryCode);
      return phoneUtil.format(phoneNumber, pnf.INTERNATIONAL);
    } catch (e) {
      console.log('CountryCode: "' + countryCode + '" ' + e);
      return e;
    }
  }
}
