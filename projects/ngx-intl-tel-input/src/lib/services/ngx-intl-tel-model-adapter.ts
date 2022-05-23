import {Injectable} from '@angular/core';
import {IntlTelModel} from '../model/intl-tel.model';

@Injectable()
export abstract class NgxIntlTelModelAdapter {

  abstract valueToString(value: unknown): string;

  abstract modelToValue(intlTelModel: IntlTelModel);

}
