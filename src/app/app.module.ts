import {
	NgxIntlTelInputModule
} from 'projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgxIntlTelInputModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
