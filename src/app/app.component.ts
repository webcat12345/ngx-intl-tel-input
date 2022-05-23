import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CountryISO} from 'projects/ngx-intl-tel-input/src/lib/enums/country-iso.enum';
import {SearchCountryField} from 'projects/ngx-intl-tel-input/src/lib/enums/search-country-field.enum';
import {TooltipLabel} from 'projects/ngx-intl-tel-input/src/lib/enums/tooltip-label.enum';
import {Country} from 'projects/ngx-intl-tel-input/src/lib/model/country.model';
import {CountryDropdownDisplayOptions} from '../../projects/ngx-intl-tel-input/src/lib/enums/country-dropdown-display-options.enum';
import {NgxIntlTelFormService} from '../../projects/ngx-intl-tel-input/src/lib/services/ngx-intl-tel-form.service';
import {NgxIntlTelModelAdapter} from '../../projects/ngx-intl-tel-input/src/lib/services/ngx-intl-tel-model-adapter';
import {NgxIntlTelModelAdapterService} from './ngx-intl-tel-model-adapter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NgxIntlTelModelAdapter,
    useClass: NgxIntlTelModelAdapterService
  }]
})
export class AppComponent {
  separateDialCode = false;
  replaceDialCode = true;
  stroked = true;
  disableCountrySelect = false;
  changeDisabled = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Ukraine, CountryISO.Russia, CountryISO.Israel];
  phoneForm = new FormGroup({
    phone: new FormControl({
      'nationalNumber': '066 223 3456',
      'dialCode': '+380',
    }, [Validators.required])
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
