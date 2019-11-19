import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {Country} from '../../model/country.model';
import {TooltipLabel} from '../../enums/tooltip-label.enum';

@Component({
  selector: 'ngx-intl-tel-trigger',
  templateUrl: './ngx-intl-tel-trigger.component.html',
  styleUrls: ['./ngx-intl-tel-trigger.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxIntlTelTriggerComponent {

  @Input()
  country: Country;

  @Input()
  showCode: boolean;

  @Input()
  stroked: boolean;

  @Input()
  tooltipField: TooltipLabel;

  @Input()
  isMenuOpened: boolean;

  @Input()
  isError: boolean;
}
