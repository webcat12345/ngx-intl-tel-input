# International Telephone Input for Angular (NgxIntlTelInput)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

[![Build Status](https://travis-ci.org/webcat12345/ngx-intl-tel-input.svg?branch=master)](https://travis-ci.org/webcat12345/ngx-intl-tel-input) [![npm version](https://badge.fury.io/js/ngx-intl-tel-input.svg)](https://badge.fury.io/js/ngx-intl-tel-input) [![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/ngx-intl-tel-input)

An Angular package for entering and validating international telephone numbers. It adds a flag dropdown to any input, detects the user's country, displays a relevant placeholder and provides formatting/validation methods.

![alt](readme-assets/ngx-intl-tel-input.jpg)

**Supports:**

- Angular 8
- ReactiveFormsModule
- FormsModule
- Validation with [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber)

## Installation

### Install Dependencies

```$ npm install intl-tel-input@14.1.0 --save```

```$ npm install google-libphonenumber --save```

```$ ng add ngx-bootstrap```

### Add Dependency Style

Add *'intl-tel-input'* style file: 

```./node_modules/intl-tel-input/build/css/intlTelInput.css```

to **angular.json** styles array:

```json

"styles": [
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
  "./node_modules/intl-tel-input/build/css/intlTelInput.css",
  "src/styles.css"
],

```

### Install This Library

```$ npm install ngx-intl-tel-input --save```

## Usage

### Import

Add ```BsDropDownModule``` and ```NgxIntlTelInputModule``` to your module file:

```javascript

imports: [
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
  ]

```

## Example

Refer to main app in this repository for working example.

Or this [Stackblitz Demo](https://stackblitz.com/edit/ngx-intl-tel-input-demo).

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
    [tooltipField]="TooltipLabel.Name"
    [phoneValidation]="true"
    [id]="my-input-id"
    name="phone"
    formControlName="phone"></ngx-intl-tel-input>
  </form>

```

## Options

| Options                       | Type                   | Default            | Description                                                                         |
| ------------------------------|------------------------|--------------------|-------------------------------------------------------------------------------------|
| cssClass                      | ```string```           | ```control-form``` | Bootstrap input css class or your own custom one.                                   |
| preferredCountries            | ```<CountryISO>[]```         | ```[]```           | List of countries, which will appear at the top.                        |
| onlyCountries                 | ```<CountryISO>[]```         | ```[]```           | List of manually selected countries, which will appear in the dropdown. |
| enableAutoCountrySelect       | ```boolean```          | ```false```        | Toggle automatic country (flag) selection based on user input.                      |
| enablePlaceholder             | ```boolean```          | ```true```         | Input placeholder text, which addapts to the country selected.                      |
| searchCountryFlag             | ```boolean```          | ```false```         | Enables input search box for countries in the flag dropdown.      |
| searchCountryField             | ```<SearchCountryField>[]```          | ```[SearchCountryField.All]```         | Customize which fields to search in, if ```searchCountryFlag``` is enabled. Use ```SearchCountryField``` helper enum. |
| searchCountryPlaceholder | ```string``` | ```'Search Country'``` | Placeholder value for ```searchCountryField``` |
| maxLength             | ```number```          | ```None```         | Add character limit.|
| tooltipField             | ```<TooltipLabel>```          | ```None```         | Set tooltip on flag hover. Use ```TooltipLabel``` helper enum for label type options. |
| selectFirstCountry             | ```boolean```          | ```true```         | Selects first country from ```preferredCountries``` if is set. If not then uses main list. |
| phoneValidation             | ```boolean```          | ```true```         | Disable phone validation. |
| id             | ```string```          | ```phone```         | Unique ID for input. |
| selectedCountryISO             | ```<CountryISO>``` | ```None```| Set specific country on load.                  |
| separateDialCode | ```boolean``` | ```false``` | Visually separate dialcode into the drop down element. |
| countryChange | ```<Country>``` | ```None``` | Emits country value when the user selects a country from the dropdown. |

## Library Contributions

- Fork repo.
- Update ```./projects/ngx-intl-tel-input```
- Build / test library.
- Update ```./src/app``` with new functionality.
- Update README.md
- Pull request.

### Helpful commands

- Build lib: ```$ npm run build_lib```
- Copy license and readme files: ```$ npm run copy-files```
- Create package: ```$ npm run npm_pack```
- Build lib and create package: ```$ npm run package```

### Use localy

After building and creating package, you can use it localy too.

In your project run:

```$ npm install --save {{path to your local '*.tgz' package file}}```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/webcat12345"><img src="https://avatars3.githubusercontent.com/u/19761422?v=4" width="100px;" alt="webcat_black"/><br /><sub><b>webcat_black</b></sub></a><br /><a href="#design-webcat12345" title="Design">🎨</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=webcat12345" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=webcat12345" title="Documentation">📖</a> <a href="#ideas-webcat12345" title="Ideas, Planning, & Feedback">🤔</a> <a href="#question-webcat12345" title="Answering Questions">💬</a> <a href="#infra-webcat12345" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-webcat12345" title="Examples">💡</a> <a href="#maintenance-webcat12345" title="Maintenance">🚧</a> <a href="#review-webcat12345" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=webcat12345" title="Tests">⚠️</a></td><td align="center"><a href="http://pasevin.com"><img src="https://avatars2.githubusercontent.com/u/1058469?v=4" width="100px;" alt="Aleksandr Pasevin"/><br /><sub><b>Aleksandr Pasevin</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=pasevin" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=pasevin" title="Documentation">📖</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/issues?q=author%3Apasevin" title="Bug reports">🐛</a> <a href="#platform-pasevin" title="Packaging/porting to new platform">📦</a> <a href="#plugin-pasevin" title="Plugin/utility libraries">🔌</a> <a href="#question-pasevin" title="Answering Questions">💬</a> <a href="#infra-pasevin" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-pasevin" title="Examples">💡</a> <a href="#maintenance-pasevin" title="Maintenance">🚧</a> <a href="#review-pasevin" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=pasevin" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/Dviejopomata"><img src="https://avatars0.githubusercontent.com/u/6862893?v=4" width="100px;" alt="Dviejo"/><br /><sub><b>Dviejo</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=Dviejopomata" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/issues?q=author%3ADviejopomata" title="Bug reports">🐛</a> <a href="#example-Dviejopomata" title="Examples">💡</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=Dviejopomata" title="Tests">⚠️</a> <a href="#question-Dviejopomata" title="Answering Questions">💬</a> <a href="#maintenance-Dviejopomata" title="Maintenance">🚧</a> <a href="#review-Dviejopomata" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://www.fosforito.net"><img src="https://avatars3.githubusercontent.com/u/5000255?v=4" width="100px;" alt="Jens Wagner"/><br /><sub><b>Jens Wagner</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=Fosforito" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
