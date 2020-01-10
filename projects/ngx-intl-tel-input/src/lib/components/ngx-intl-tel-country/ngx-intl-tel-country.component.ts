import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild, ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {Country} from '../../model/country.model';
import {CountryDropdownDisplayOptions} from '../../enums/country-dropdown-display-options.enum';
import {MatMenuItem} from '@angular/material/menu';

@Component({
  selector: 'ngx-intl-tel-country',
  templateUrl: './ngx-intl-tel-country.component.html',
  styleUrls: ['./ngx-intl-tel-country.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxIntlTelCountryComponent {

  @Input()
  countries: Country[];

  @Input()
  dropdownParams: CountryDropdownDisplayOptions[];

  @Input()
  stroked: boolean;

  @Output()
  countryClick = new EventEmitter<Country>();

  get showFlag(): boolean {
    return this.dropdownParams.some(value => value === CountryDropdownDisplayOptions.Flag);
  }

  get showName(): boolean {
    return this.dropdownParams.some(value => value === CountryDropdownDisplayOptions.Name);
  }

  get showDial(): boolean {
    return this.dropdownParams.some(value => value === CountryDropdownDisplayOptions.Dial);
  }

}
