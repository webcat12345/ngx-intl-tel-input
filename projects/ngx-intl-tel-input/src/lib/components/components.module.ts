import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxIntlTelTriggerComponent} from './ngx-intl-tel-trigger/ngx-intl-tel-trigger.component';
import {MatIconModule} from '@angular/material/icon';
import {NgxIntlTelCountryComponent} from './ngx-intl-tel-country/ngx-intl-tel-country.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [NgxIntlTelTriggerComponent, NgxIntlTelCountryComponent],
  exports: [
    NgxIntlTelTriggerComponent,
    NgxIntlTelCountryComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ]
})
export class ComponentsModule {
}
