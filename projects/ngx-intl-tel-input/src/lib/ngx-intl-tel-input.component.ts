import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CountryCode} from './data/country-code';
import {phoneNumberValidator} from './ngx-intl-tel-input.validator';
import {Country} from './model/country.model';
import * as lpn from 'google-libphonenumber';
import {TooltipLabel} from './enums/tooltip-label.enum';
import {CountryISO} from './enums/country-iso.enum';
import {FloatLabelType} from '@angular/material/core';
import {CountryDropdownDisplayOptions} from './enums/country-dropdown-display-options.enum';
import {NgxIntlTelInputService} from './ngx-intl-tel-input.service';

@Component({
  selector: 'ngx-intl-tel-input',
  templateUrl: './ngx-intl-tel-input.component.html',
  styleUrls: ['./ngx-intl-tel-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    CountryCode,
    NgxIntlTelInputService,
    {
      provide: NG_VALUE_ACCESSOR,
      // tslint:disable-next-line:no-forward-ref
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
export class NgxIntlTelInputComponent implements OnInit, OnChanges {

  @Input()
  value = '';

  @Input()
  preferredCountries: string[] = [];

  @Input()
  enablePlaceholder = true;

  @Input()
  cssClass = 'form-control';

  @Input()
  onlyCountries: string[] = [];

  @Input()
  enableAutoCountrySelect = true;

  @Input()
  maxLength = '';

  @Input()
  tooltipField: TooltipLabel;

  @Input()
  selectFirstCountry = true;

  @Input()
  selectedCountryISO: CountryISO;

  @Input()
  phoneValidation = true;

  @Input()
  floatLabel: FloatLabelType = 'always';

  @Input()
  inputLabel: string = 'Phone number';

  @Input()
  separateDialCode = false;

  @Input()
  replaceDialCode = true;

  @Input()
  stroked: boolean;

  @Input()
  set dropdownClass(panelClass: string | string[]) {
    const classes = (typeof panelClass === 'string') ? [panelClass] : panelClass;
    this._dropdownPanelClass.push(...classes);
  }

  @Input()
  set dropdownParams(params: CountryDropdownDisplayOptions[]) {
    if (params && params.length !== 0) {
      this.dropdownParamsData = params;
    }
  }

  @Output() readonly countryChange = new EventEmitter<Country>();

  @Output()
  onBlur = new EventEmitter<void>();

  @Output()
  onFocus = new EventEmitter<void>();

  @Output()
  menuClosed = new EventEmitter<void>();

  @Output()
  menuOpened = new EventEmitter<void>();

  get dropdownClass(): string | string[] {
    return this._dropdownPanelClass.join(' ');
  }

  private readonly _dropdownPanelClass: string[] = this.stroked ? ['ngx-intl-tel__dropdown'] : ['ngx-intl-tel__dropdown-stroked'];

  selectedCountry: Country = {
    areaCodes: undefined,
    dialCode: '',
    flagClass: '',
    iso2: '',
    name: '',
    placeHolder: '',
    priority: 0
  };

  separateDialCodeClass: string;

  phoneNumber = '';

  preferredCountriesInDropDown: Array<Country> = [];
  // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
  phoneUtil: any = lpn.PhoneNumberUtil.getInstance();
  disabled = false;
  errors: Array<any> = ['Phone number is required.'];

  dropdownParamsData: CountryDropdownDisplayOptions[] = [
    CountryDropdownDisplayOptions.Dial,
    CountryDropdownDisplayOptions.Flag,
    CountryDropdownDisplayOptions.Name
  ];

  @ViewChild('countryList', {static: false}) countryList: ElementRef;

  onTouched = () => {
  }

  propagateChange = (_: any) => {
  }

  constructor(
    private readonly countryCodeData: CountryCode,
    private readonly ngxIntlTelInputService: NgxIntlTelInputService
  ) {
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.ngxIntlTelInputService.allCountries && changes['selectedCountryISO']
      && changes['selectedCountryISO'].currentValue !== changes['selectedCountryISO'].previousValue) {
      this.getSelectedCountry();
    }
    if (changes.preferredCountries) {
      this.preferredCountriesInDropDown = this.ngxIntlTelInputService.getPreferredCountries(this.preferredCountries);
    }
    this.checkSeparateDialCodeStyle();
  }

  private init(): void {
    this.ngxIntlTelInputService.fetchCountryData(this.enablePlaceholder);
    if (this.preferredCountries.length) {
      this.preferredCountriesInDropDown = this.ngxIntlTelInputService.getPreferredCountries(this.preferredCountries);
    }
    if (this.onlyCountries.length) {
      this.ngxIntlTelInputService.setCountries(this.onlyCountries);
    }
    if (this.selectFirstCountry) {
      if (this.preferredCountriesInDropDown.length) {
        this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
      } else {
        this.setSelectedCountry(this.ngxIntlTelInputService.allCountries[0]);
      }
    }
    this.getSelectedCountry();
    this.checkSeparateDialCodeStyle();
    this.onCountrySelect(this.selectedCountry);
  }

  setSelectedCountry(country: Country): void {
    this.selectedCountry = country;
    this.countryChange.emit(country);
  }

  getSelectedCountry() {
    if (this.selectedCountryISO) {
      const country = this.ngxIntlTelInputService.allCountries.find(c => {
        return (c.iso2.toLowerCase() === this.selectedCountryISO.toLowerCase());
      });
      this.setSelectedCountry(country);
      if (this.selectedCountry) {
        if (this.phoneNumber) {
          this.onPhoneNumberChange();
        } else {
          this.propagateChange(undefined);
        }
      }
    }
  }

  public onPhoneNumberChange(): void {
    this.value = this.phoneNumber;

    let number: lpn.PhoneNumber;
    try {
      number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
    } catch (e) {
    }

    let countryCode = this.selectedCountry.iso2;
    // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
    if (this.enableAutoCountrySelect) {
      countryCode = number && number.getCountryCode()
        ? this.ngxIntlTelInputService.getCountryIsoCode(number.getCountryCode(), number)
        : this.selectedCountry.iso2;
      if (countryCode && countryCode !== this.selectedCountry.iso2) {
        const newCountry = this.ngxIntlTelInputService.allCountries.find(c => c.iso2 === countryCode);
        if (newCountry) {
          this.setSelectedCountry(newCountry);
        }
      }
    }
    countryCode = countryCode ? countryCode : this.selectedCountry.iso2;

    this.checkSeparateDialCodeStyle();

    if (!this.value) {
      // tslint:disable-next-line:no-null-keyword
      this.propagateChange(null);
    } else {
      const intlNo = number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL) : '';

      // parse phoneNumber if separate dial code is needed
      if (this.separateDialCode && intlNo) {
        this.phoneNumber = this.removeDialCode(intlNo);
      }

      this.propagateChange({
        number: this.value,
        internationalNumber: intlNo,
        nationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL) : '',
        countryCode: countryCode.toUpperCase(),
        dialCode: '+' + this.selectedCountry.dialCode
      });
    }
  }

  public onCountrySelect(country: Country, el?): void {
    this.setSelectedCountry(country);

    this.checkSeparateDialCodeStyle();

    this.value = this.phoneNumber;

    let number: lpn.PhoneNumber;
    try {
      number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
    } catch (e) {
    }

    if (this.replaceDialCode) {
      this.phoneNumber = this._replaceDialCode(number, country.dialCode);
    }

    const intlNo = number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL) : ``;

    // parse phoneNumber if separate dial code is needed
    if (this.separateDialCode && intlNo) {
      this.phoneNumber = this.removeDialCode(intlNo);
    }

    this.propagateChange({
      number: this.value,
      internationalNumber: intlNo,
      nationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL) : '',
      countryCode: this.selectedCountry.iso2.toUpperCase(),
      dialCode: '+' + this.selectedCountry.dialCode
    });

    if (el)  {
      el.focus();
    }
  }

  public onInputKeyPress(event: KeyboardEvent): void {
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
    if (obj == null) {
      this.init();
    }
    this.phoneNumber = obj;
    setTimeout(() => {
      this.onPhoneNumberChange();
    }, 1);
  }

  separateDialCodePlaceHolder(placeholder: string): string {
    return this.removeDialCode(placeholder);
  }

  private removeDialCode(phoneNumber: string): string {
    if (this.separateDialCode && phoneNumber) {
      phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
    }
    return phoneNumber;
  }

  private _replaceDialCode(phoneNumber: lpn.PhoneNumber, newCode: string): string {
    const dialCode = Number(newCode);
    if (!phoneNumber) {
      return `+${newCode}`;
    }
    phoneNumber.setCountryCode(dialCode);
    return this.phoneUtil.format(phoneNumber, lpn.PhoneNumberFormat.E164);
  }

  // adjust input alignment
  private checkSeparateDialCodeStyle() {
    if (this.separateDialCode && this.selectedCountry) {
      const countryCode = this.selectedCountry.dialCode;
      this.separateDialCodeClass = 'separate-dial-code iti-sdc-' + (countryCode.length + 1);
    } else {
      this.separateDialCodeClass = '';
    }
  }

  onBlurEvent(): void {
    this.onTouched();
    this.onBlur.emit();
  }
}
