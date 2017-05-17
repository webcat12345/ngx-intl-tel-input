import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { NgxIntlTelInputService } from './ngx-intl-tel-input.service';

export * from './ngx-intl-tel-input.component';
export * from './ngx-intl-tel-input.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxIntlTelInputComponent
  ],
  exports: [
    NgxIntlTelInputComponent
  ]
})
export class NgxIntlTelInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxIntlTelInputModule,
      providers: [NgxIntlTelInputService]
    };
  }
}
