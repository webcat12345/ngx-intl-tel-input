import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { SearchCountryField } from 'projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum';
import { TooltipLabel } from 'projects/ngx-intl-tel-input/src/lib/enums/tooltip-label.enum';
import { CountryISO } from 'projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-intl-tel-input-app';
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];
  phoneForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.phoneForm = fb.group({
      phone: [undefined, [Validators.required]]
    });
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
}
