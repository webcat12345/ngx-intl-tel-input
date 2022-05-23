import {Injectable} from '@angular/core';
import {IntlTelModel} from '../../projects/ngx-intl-tel-input/src/lib/model/intl-tel.model';
import {NgxIntlTelModelAdapter} from '../../projects/ngx-intl-tel-input/src/lib/services/ngx-intl-tel-model-adapter';
import {PhoneModel} from './phone.model';

@Injectable()
export class NgxIntlTelModelAdapterService extends NgxIntlTelModelAdapter {

  valueToString(value: PhoneModel): string {
    return value ? `${value.dialCode}${value.nationalNumber}` : '';
  }

  modelToValue(intlTelModel: IntlTelModel) {
    return {
      'nationalNumber': intlTelModel.nationalNumber,
      'dialCode': intlTelModel.dialCode,
    };
  }

}
