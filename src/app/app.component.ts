import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchCountryField} from 'projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum';
import {TooltipLabel} from 'projects/ngx-intl-tel-input/src/lib/enums/tooltip-label.enum';
import {CountryISO} from 'projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum';
import {Country} from 'projects/ngx-intl-tel-input/src/lib/model/country.model';
import {CountryDropdownDisplayOptions} from '../../projects/ngx-intl-tel-input/src/lib/enums/country-dropdown-display-options.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  separateDialCode = true;
  changeDisabled = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  lastCountryChange: Country;

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  toggleDisabled(): void {
    if (this.phoneForm.get('phone').disabled) {
      this.phoneForm.get('phone').enable();
    } else {
      this.phoneForm.get('phone').disable();
    }
  }

  dropdownParams = [CountryDropdownDisplayOptions.Flag, CountryDropdownDisplayOptions.Dial];
}
