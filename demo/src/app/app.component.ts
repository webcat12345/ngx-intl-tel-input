import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phone_number_standard = '';
  phone_number_preffered = '';
  preferredCountries = ['us', 'au', 'ru', 'gb'];
}
