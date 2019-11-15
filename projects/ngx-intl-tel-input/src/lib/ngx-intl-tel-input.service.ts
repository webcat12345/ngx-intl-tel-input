import {Injectable} from '@angular/core';
import {CountryCode} from './data/country-code';
import {Country} from './model/country.model';
import * as lpn from 'google-libphonenumber';

@Injectable({
  providedIn: 'root'
})
export class NgxIntlTelInputService {

  allCountries: Country[] = [];

  // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
  private readonly phoneUtil: any = lpn.PhoneNumberUtil.getInstance();

  constructor(private readonly countryCodeData: CountryCode) {
  }

  fetchCountryData(enablePlaceholder: boolean): Country[] {
    this.countryCodeData.allCountries.forEach(c => {
      const country: Country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: c[4] as string[] || undefined,
        flagClass: c[1].toString().toLocaleLowerCase(),
        placeHolder: ''
      };

      if (enablePlaceholder) {
        country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
      }

      this.allCountries.push(country);
    });
    return this.allCountries;
  }

  setCountries(countries: string[]): void {
    this.allCountries = this.allCountries.filter(c => countries.includes(c.iso2));
  }

  protected getPhoneNumberPlaceHolder(countryCode: string): string {
    try {
      return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat.INTERNATIONAL);
    } catch (e) {
      return e;
    }
  }

  getPreferredCountries(preferredCountries: string[]): Country[] {
    if (!preferredCountries.length) {
      return null;
    }
    return preferredCountries.map(iso2 => {
      return this.allCountries.find((c) => {
        return c.iso2 === iso2;
      });
    });
  }

  getCountryIsoCode(countryCode: number, number: lpn.PhoneNumber): string | undefined {
    // Will use this to match area code from the first numbers
    const rawNumber = number['values_']['2'].toString();
    // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
    const countries = this.allCountries.filter(c => c.dialCode === countryCode.toString());
    // Main country is the country, which has no areaCodes specified in country-code.ts file.
    const mainCountry = countries.find(c => c.areaCodes === undefined);
    // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
    const secondaryCountries = countries.filter(c => c.areaCodes !== undefined);
    let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;

    /*
      Interate over each secondary country and check if nationalNumber starts with any of areaCodes available.
      If no matches found, fallback to the main country.
    */
    secondaryCountries.forEach(country => {
      country.areaCodes.forEach(areaCode => {
        if (rawNumber.startsWith(areaCode)) {
          matchedCountry = country.iso2;
        }
      });
    });

    return matchedCountry;
  }
}
