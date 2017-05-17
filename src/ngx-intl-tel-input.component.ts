import { Component } from '@angular/core';
import { CountryCode } from './resource/country-code';
import { Country } from './model/country.model';

@Component({
  selector: 'ngx-intl-tel-input',
  templateUrl: './ngx-intl-tel-input.component.html',
  styleUrls: ['./ngx-intl-tel-input.component.css'],
  providers: [CountryCode]
})
export class NgxIntlTelInputComponent {

  allCountries: Array<Country> = [];
  constructor(
      private countryCodeData: CountryCode
  ) {
    this.fetchCountryData();
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

}
