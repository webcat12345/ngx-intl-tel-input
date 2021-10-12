# International Telephone Input for Angular (NgxIntlTelInput)

An Angular package for entering and validating international telephone numbers. It adds a flag dropdown to any input, detects the user's country, displays a relevant placeholder and provides formatting/validation methods.

**Compatibility:**

Validation with [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber)

| ngx-intl-tel-input | Angular        | ngx-bootstrap |
| ------------------ | -------------- | ------------- |
| 3.x.x              | 9.x.x - 11.x.x | 6.0.0         |
| 2.x.x              | 8.x.x - 9.1.x  | 5.6.x         |

## TNS - Setup Github Token for Github Packages Auth

1. Go to Github Settings: https://github.com/settings/tokens
2. Generate a new personal access token and make sure the `package:read` scope is set.
3. Make sure to copy the token as you will not be able to copy it again, it is only shown once. Then click the “Enable SSO"
4. Login to to you vagrant box and update the file `~/.bashrc` with the following line `export GITHUB_TOKEN=<your token>`
5. Exit out of the vagrant box and re-ssh back into the vagrant box (this is needed for the .bashrc to actually take).
6. Run command inside your vagrant box `cd /var/www/track/public/ngui-src/`
7. Run command npm install and verify no errors occur.
   1. If you are on Linux you may get an `EACCESS` error while installing puppeteer. If you get this error run `npm install puppeteer --unsafe-perm=true`. This should resolve the error.

## Installation

### Install Dependencies

`$ npm install @travelnetsolutions/ngx-intl-tel-input --save`

`$ npm install google-libphonenumber --save`

`$ ng add ngx-bootstrap`

If you do not wish to use Bootstrap's global CSS, we now package the project with only the relevant
bootstrap styling needed for the dropdown. As such, you can remove the bootstrap styling from `angular.json`.

Further, Angular CLI should tree-shake the rest of Ngx-Boostrap away if you don't utilize other dependencies from
the bootstrap package. This should keep this dependency a lean feature-add

### Add Dependency Style

Add _'intl-tel-input'_ style file:

`./node_modules/intl-tel-input/build/css/intlTelInput.css`

to **angular.json** styles array:

```json

"styles": [
  "./node_modules/intl-tel-input/build/css/intlTelInput.css",
  "src/styles.css"
],

```

### Install This Library

`$ npm install ngx-intl-tel-input --save`

## Usage

### Import

Add `NgxIntlTelInputModule` to your module file:

```javascript
imports: [NgxIntlTelInputModule];
```

## Example

Refer to main app in this repository for working example.

Or this:

[Stackblitz Demo (Angular 8)](https://stackblitz.com/edit/ngx-intl-tel-input-demo-ng-8)

[Stackblitz Demo (Angular 9)](https://stackblitz.com/edit/ngx-intl-tel-input-demo-ng-9)

[Stackblitz Demo (Angular 10)](https://stackblitz.com/edit/ngx-intl-tel-input-demo-ng-10)

[Stackblitz Demo (Angular 11)](https://stackblitz.com/edit/ngx-intl-tel-input-demo-ng-11)

```html
<form #f="ngForm" [formGroup]="phoneForm">
	<ngx-intl-tel-input
		[cssClass]="'custom'"
		[preferredCountries]="[CountryISO.UnitedStates, CountryISO.UnitedKingdom]"
		[enableAutoCountrySelect]="false"
		[enablePlaceholder]="true"
		[searchCountryFlag]="true"
		[searchCountryField]="[SearchCountryField.Iso2, SearchCountryField.Name]"
		[selectFirstCountry]="false"
		[selectedCountryISO]="CountryISO.India"
		[maxLength]="15"
		[phoneValidation]="true"
		[inputId]="my-input-id"
		name="phone"
		formControlName="phone"
	></ngx-intl-tel-input>
</form>
```

## Options

| Options                  | Type                     | Default                           | Description                                                                                                   |
| ------------------------ | ------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| cssClass                 | `string`                 | `control-form`                    | Bootstrap input css class or your own custom one.                                                             |
| preferredCountries       | `<CountryISO>[]`         | `[]`                              | List of countries, which will appear at the top.                                                              |
| onlyCountries            | `<CountryISO>[]`         | `[]`                              | List of manually selected countries, which will appear in the dropdown.                                       |
| enableAutoCountrySelect  | `boolean`                | `true`                            | Toggle automatic country (flag) selection based on user input.                                                |
| enablePlaceholder        | `boolean`                | `true`                            | Input placeholder text, which adapts to the country selected.                                                 |
| customPlaceholder        | `string`                 | `None`                            | Custom string to be inserted as a placeholder.                                                                |
| numberFormat             | `<PhoneNumberFormat>`    | `PhoneNumberFormat.International` | Custom string to be inserted as a placeholder.                                                                |
| searchCountryFlag        | `boolean`                | `false`                           | Enables input search box for countries in the flag dropdown.                                                  |
| searchCountryField       | `<SearchCountryField>[]` | `[SearchCountryField.All]`        | Customize which fields to search in, if `searchCountryFlag` is enabled. Use `SearchCountryField` helper enum. |
| searchCountryPlaceholder | `string`                 | `'Search Country'`                | Placeholder value for `searchCountryField`                                                                    |
| maxLength                | `number`                 | `None`                            | Add character limit.                                                                                          |
| selectFirstCountry       | `boolean`                | `true`                            | Selects first country from `preferredCountries` if is set. If not then uses main list.                        |
| phoneValidation          | `boolean`                | `true`                            | Disable phone validation.                                                                                     |
| inputId                  | `string`                 | `phone`                           | Unique ID for `<input>` element.                                                                              |
| selectedCountryISO       | `<CountryISO>`           | `None`                            | Set specific country on load.                                                                                 |
| separateDialCode         | `boolean`                | `false`                           | Visually separate dialcode into the drop down element.                                                        |
| countryChange            | `<Country>`              | `None`                            | Emits country value when the user selects a country from the dropdown.                                        |

## Supported Formats

Following formats are supported

- NATIONAL // Produces "044 668 18 00"
- INTERNATIONAL // Produces "+41 44 668 18 00"
- E164 // Produces "+41446681800"

### Helpful commands

- Build lib: `$ npm run build_lib`
- Copy license and readme files: `$ npm run copy-files`
- Create package: `$ npm run npm_pack`
- Build lib and create package: `$ npm run package`
