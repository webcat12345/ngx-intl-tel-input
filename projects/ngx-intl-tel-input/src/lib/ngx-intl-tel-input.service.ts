import {Injectable} from '@angular/core';
import {CountryCode} from './data/country-code';
import {Country} from './model/country.model';
import * as lpn from 'google-libphonenumber';
import {SearchCountryField} from './enums/search-country-field.enum';
import {NgxIntlTelCountryComponent} from './components/ngx-intl-tel-country/ngx-intl-tel-country.component';

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

  /**
   * Search country based on country name, iso2, dialCode or all of them.
   */
  searchCountry(searchText, searchCountryField: SearchCountryField[], countryList: NgxIntlTelCountryComponent): Country[] {
    if (!searchText) {
      countryList.countryItem.first.focus();
      return [];
    }
    const countrySearchTextLower = searchText.toLowerCase();
    const country = this.allCountries.filter(c => {
      if (searchCountryField.indexOf(SearchCountryField.All) > -1) {
        // Search in all fields
        if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
          return c;
        }
        if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
          return c;
        }
        if (c.dialCode.startsWith(searchText)) {
          return c;
        }
      } else {
        // Or search by specific SearchCountryField(s)
        if (searchCountryField.indexOf(SearchCountryField.Iso2) > -1) {
          if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
            return c;
          }
        }
        if (searchCountryField.indexOf(SearchCountryField.Name) > -1) {
          if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
            return c;
          }
        }
        if (searchCountryField.indexOf(SearchCountryField.DialCode) > -1) {
          if (c.dialCode.startsWith(searchText)) {
            return c;
          }
        }
      }
    });
    if (country.length > 0) {
      const el = countryList.countryItem.find((countryComponent, index) => {
        const id = countryList.countryItemHtml.toArray()[index].nativeElement.getAttribute('id');
        return id === country[0].iso2;
      });
      if (el) {
        el.focus();
      }
    } else {
      countryList.countryItem.first.focus();
    }
    return country;
  }

  onInputKeyPress(event: KeyboardEvent): void {
    const allowedChars = /[0-9\+\-\ ]/;
    const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
    const allowedOtherKeys = [
      'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown',
      'Home', 'End', 'Insert', 'Delete', 'Backspace'
    ];

    if (!allowedChars.test(event.key)
      && !(event.ctrlKey && allowedCtrlChars.test(event.key))
      && !(allowedOtherKeys.includes(event.key))) {
      event.preventDefault();
    }
  }
}
