import { Component, Output, Input, OnInit } from '@angular/core';
import { CountryCode } from './resource/country-code';
import { Country } from './model/country.model';

@Component({
  selector: 'ngx-intl-tel-input',
  templateUrl: './ngx-intl-tel-input.component.html',
  styleUrls: ['./ngx-intl-tel-input.component.css'],
  providers: [CountryCode]
})
export class NgxIntlTelInputComponent implements OnInit {
  @Input() value = '';
  phone_number = '';
  allCountries: Array<Country> = [];
  selectedCountry: Country = new Country();
  constructor(
      private countryCodeData: CountryCode
  ) {
    this.fetchCountryData();
  }

  ngOnInit() {
    this.selectedCountry = this.allCountries[0];
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
      this.allCountries.push(country);
    });
  }

  public onPhoneNumberChange(): void {
    this.value = this.selectedCountry.dialCode + this.phone_number;
  }

  public onCountrySelect(country: Country): void {
    this.selectedCountry = country;
    this.value = this.selectedCountry.dialCode + this.phone_number;
  }
}
