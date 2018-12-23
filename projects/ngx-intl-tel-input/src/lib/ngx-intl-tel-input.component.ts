import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { CountryCode } from './resource/country-code';
import { phoneNumberValidator } from './ngx-intl-tel-input.validator';
import { Country } from './model/country.model';
import * as lpn from 'google-libphonenumber';

@Component({
  selector: 'ngx-intl-tel-input',
  templateUrl: './ngx-intl-tel-input.component.html',
  styles: [
    'li.country:hover { background-color: rgba(0, 0, 0, 0.05); }',
    '.selected-flag.dropdown-toggle:after { content: none; }',
    '.flag-container.disabled {cursor: default !important; }',
    '.intl-tel-input.allow-dropdown .flag-container.disabled:hover .selected-flag { background: none; }'
  ],
  providers: [
    CountryCode,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxIntlTelInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: phoneNumberValidator,
      multi: true,
    }
  ]
})
export class NgxIntlTelInputComponent implements OnInit {

  @Input() value = '';
  @Input() preferredCountries: Array<string> = [];
  @Input() enablePlaceholder = true;
  @Input() cssClass = 'form-control';

  phoneNumber = '';
  allCountries: Array<Country> = [];
  preferredCountriesInDropDown: Array<Country> = [];
  selectedCountry: Country = new Country();
  phoneUtil = lpn.PhoneNumberUtil.getInstance();
  disabled = false;
  errors: Array<any> = ['Phone number is required.'];


  onTouched = () => { };
  propagateChange = (_: any) => { };

  constructor(
    private countryCodeData: CountryCode
  ) {
    this.fetchCountryData();
  }

  ngOnInit() {
    if (this.preferredCountries.length) {
      this.preferredCountries.forEach(iso2 => {
        const preferredCountry = this.allCountries.filter((c) => {
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
    this.value = this.phoneNumber;

    let number = '';
    try {
      number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
    } catch (e) {
    }

    this.propagateChange({
      number: this.value,
      internationalNumber: number === '' ? '' : this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL),
      nationalNumber: number === '' ? '' : this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL),
      countryCode: this.selectedCountry.iso2.toUpperCase()
    });
  }

  public onCountrySelect(country: Country, el): void {
    this.selectedCountry = country;

    if (this.phoneNumber.length > 0) {
      this.value = this.phoneNumber;

      let number = '';
      try {
        number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
      } catch (e) {
      }

      this.propagateChange({
        number: this.value,
        internationalNumber: number === '' ? '' : this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL),
        nationalNumber: number === '' ? '' : this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL),
        countryCode: this.selectedCountry.iso2.toUpperCase()
      });
    }

    el.focus();
  }

  public onInputKeyPress(event): void {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  protected fetchCountryData(): void {
    this.countryCodeData.allCountries.forEach(c => {
      const country = new Country();

      country.name = c[0].toString();
      country.iso2 = c[1].toString();
      country.dialCode = c[2].toString();
      country.priority = +c[3] || 0;
      country.areaCode = +c[4] || undefined;
      country.flagClass = country.iso2.toLocaleLowerCase();

      if (this.enablePlaceholder) {
        country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
      }

      this.allCountries.push(country);
    });
  }

  protected getPhoneNumberPlaceHolder(countryCode: string): string {
    try {
      return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat.INTERNATIONAL);
    } catch (e) {
      console.log('CountryCode: "' + countryCode + '" ' + e);
      return e;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    if (obj) {
      this.phoneNumber = obj;
      setTimeout(() => {
        this.onPhoneNumberChange();
      }, 1);
    }
  }

}
