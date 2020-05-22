import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchCountryField} from 'projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum';
import {TooltipLabel} from 'projects/ngx-intl-tel-input/src/lib/enums/tooltip-label.enum';
import {CountryISO} from 'projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum';
import {Country} from 'projects/ngx-intl-tel-input/src/lib/model/country.model';
import {CountryDropdownDisplayOptions} from '../../projects/ngx-intl-tel-input/src/lib/enums/country-dropdown-display-options.enum';
import {NgxIntlTelFormService} from '../../projects/ngx-intl-tel-input/src/lib/services/ngx-intl-tel-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  separateDialCode = false;
  replaceDialCode = true;
  changeDisabled = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Ukraine, CountryISO.Russia, CountryISO.Israel];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  lastCountryChange: Country;

  constructor(private readonly ngxIntlTelForm: NgxIntlTelFormService) {
  }

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

  onSubmit(): void {
    this.ngxIntlTelForm.submit();
  }

  dropdownParams = [CountryDropdownDisplayOptions.Flag, CountryDropdownDisplayOptions.Dial];
}
