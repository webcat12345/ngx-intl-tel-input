# International Telephone Input for Angular (NgxIntlTelInput)

[![Build Status](https://github.com/webcat12345/ngx-intl-tel-input/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/webcat12345/ngx-intl-tel-input/actions/workflows/ci.yml)
[![GitHub Pages](https://img.shields.io/badge/Demo-blue?logo=angular&label=Pages&color=7952B3)](https://webcat12345.github.io/ngx-intl-tel-input/demo/)
[![license](https://img.shields.io/github/license/webcat12345/ngx-intl-tel-input)](https://github.com/webcat12345/ngx-intl-tel-input/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/ngx-intl-tel-input)](https://badge.fury.io/js/ngx-intl-tel-input)
[![npm](https://img.shields.io/npm/dm/ngx-intl-tel-input)](https://www.npmjs.com/package/ngx-intl-tel-input)

[![All Contributors](https://img.shields.io/badge/all_contributors-23-orange.svg)](#contributors)

An Angular package for entering and validating international telephone numbers. It adds a flag dropdown to any input, detects the user's country, displays a relevant placeholder and provides formatting/validation methods.

![alt](readme-assets/ngx-intl-tel-input.jpg)

**Compatibility:**

Validation with [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber)

| ngx-intl-tel-input | Angular         | ngx-bootstrap |
| ------------------ |-----------------| ------------- |
| 17.x.x             | >= 17.x.x       | >= 12.0.0     |
| 16.x.x             | >= 16.x.x       | >= 11.0.0     |
| 15.x.x             | >= 15.x.x       | >= 10.0.0     |
| 14.x.x             | 12.x.x - 14.x.x | >= 6.0.0      |
| 13.x.x             | 12.x.x - 13.x.x | >= 6.0.0      |
| 3.2.1              | 12.x.x - 13.x.x | >= 6.0.0      |
| 3.1.3              | 8.x.x - 11.x.x  | 6.0.x         |
| 2.x.x              | 8.x.x - 9.1.x   | 5.6.x         |

## Installation

### Install Dependencies

`$ npm install intl-tel-input@19 --save`

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

[Stackblitz Demo (Angular 12)](https://stackblitz.com/edit/ngx-intl-tel-input-demo-ng-12)

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

## Library Contributions

- Fork repo.
- Update `./projects/ngx-intl-tel-input`
- Build / test library.
- Update `./src/app` with new functionality.
- Update README.md
- Pull request.

### Helpful commands

- Build lib: `$ npm run build_lib`
- Copy license and readme files: `$ npm run copy-files`
- Create package: `$ npm run npm_pack`
- Build lib and create package: `$ npm run package`

### Use locally

After building and creating package, you can use it locally too.

In your project run:

`$ npm install --save {{path to your local '*.tgz' package file}}`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/webcat12345"><img src="https://avatars3.githubusercontent.com/u/19761422?v=4?s=100" width="100px;" alt="webcat_black"/><br /><sub><b>webcat_black</b></sub></a><br /><a href="#design-webcat12345" title="Design">🎨</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=webcat12345" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=webcat12345" title="Documentation">📖</a> <a href="#ideas-webcat12345" title="Ideas, Planning, & Feedback">🤔</a> <a href="#question-webcat12345" title="Answering Questions">💬</a> <a href="#infra-webcat12345" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-webcat12345" title="Examples">💡</a> <a href="#maintenance-webcat12345" title="Maintenance">🚧</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/pulls?q=is%3Apr+reviewed-by%3Awebcat12345" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=webcat12345" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cmckni3"><img src="https://avatars0.githubusercontent.com/u/735717?v=4?s=100" width="100px;" alt="Chris McKnight"/><br /><sub><b>Chris McKnight</b></sub></a><br /><a href="#question-cmckni3" title="Answering Questions">💬</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=cmckni3" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=cmckni3" title="Documentation">📖</a> <a href="#ideas-cmckni3" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-cmckni3" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#plugin-cmckni3" title="Plugin/utility libraries">🔌</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/pulls?q=is%3Apr+reviewed-by%3Acmckni3" title="Reviewed Pull Requests">👀</a> <a href="#tool-cmckni3" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://pasevin.com"><img src="https://avatars2.githubusercontent.com/u/1058469?v=4?s=100" width="100px;" alt="Aleksandr Pasevin"/><br /><sub><b>Aleksandr Pasevin</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=pasevin" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=pasevin" title="Documentation">📖</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/issues?q=author%3Apasevin" title="Bug reports">🐛</a> <a href="#platform-pasevin" title="Packaging/porting to new platform">📦</a> <a href="#plugin-pasevin" title="Plugin/utility libraries">🔌</a> <a href="#question-pasevin" title="Answering Questions">💬</a> <a href="#infra-pasevin" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-pasevin" title="Examples">💡</a> <a href="#maintenance-pasevin" title="Maintenance">🚧</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/pulls?q=is%3Apr+reviewed-by%3Apasevin" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=pasevin" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Dviejopomata"><img src="https://avatars0.githubusercontent.com/u/6862893?v=4?s=100" width="100px;" alt="Dviejo"/><br /><sub><b>Dviejo</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=Dviejopomata" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/issues?q=author%3ADviejopomata" title="Bug reports">🐛</a> <a href="#example-Dviejopomata" title="Examples">💡</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=Dviejopomata" title="Tests">⚠️</a> <a href="#question-Dviejopomata" title="Answering Questions">💬</a> <a href="#maintenance-Dviejopomata" title="Maintenance">🚧</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/pulls?q=is%3Apr+reviewed-by%3ADviejopomata" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kino.codes"><img src="https://avatars3.githubusercontent.com/u/22554212?v=4?s=100" width="100px;" alt="Kino Roy"/><br /><sub><b>Kino Roy</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=kinoroy" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/wwwalkerrun"><img src="https://avatars2.githubusercontent.com/u/457187?v=4?s=100" width="100px;" alt="Nathan Walker"/><br /><sub><b>Nathan Walker</b></sub></a><br /><a href="#maintenance-NathanWalker" title="Maintenance">🚧</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=NathanWalker" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jiarongxu"><img src="https://avatars0.githubusercontent.com/u/502605?v=4?s=100" width="100px;" alt="Jiarong Xu"/><br /><sub><b>Jiarong Xu</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=jiarongxu" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://crutchcorn.dev"><img src="https://avatars.githubusercontent.com/u/9100169?v=4?s=100" width="100px;" alt="Corbin Crutchley"/><br /><sub><b>Corbin Crutchley</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=crutchcorn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/nayeli-beckham-martínez/"><img src="https://avatars.githubusercontent.com/u/78670199?v=4?s=100" width="100px;" alt="Nayeli Beckham"/><br /><sub><b>Nayeli Beckham</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=NayeBeckham" title="Code">💻</a> <a href="#platform-NayeBeckham" title="Packaging/porting to new platform">📦</a> <a href="#question-NayeBeckham" title="Answering Questions">💬</a> <a href="#maintenance-NayeBeckham" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://rushvora.com"><img src="https://avatars.githubusercontent.com/u/602333?v=4?s=100" width="100px;" alt="Rushabh Vora"/><br /><sub><b>Rushabh Vora</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=rushvora" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KarimTayie"><img src="https://avatars.githubusercontent.com/u/29521303?v=4?s=100" width="100px;" alt="Karim Tayie"/><br /><sub><b>Karim Tayie</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=KarimTayie" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/imadilkhalil"><img src="https://avatars.githubusercontent.com/u/19613930?v=4?s=100" width="100px;" alt="Adil Khalil"/><br /><sub><b>Adil Khalil</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=imadilkhalil" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ambersz"><img src="https://avatars.githubusercontent.com/u/647791?v=4?s=100" width="100px;" alt="Alice Zhao"/><br /><sub><b>Alice Zhao</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=ambersz" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.felipecespedes.co"><img src="https://avatars.githubusercontent.com/u/11846311?v=4?s=100" width="100px;" alt="Felipe Céspedes"/><br /><sub><b>Felipe Céspedes</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=felipecespedes" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bb-sonam"><img src="https://avatars.githubusercontent.com/u/60337996?v=4?s=100" width="100px;" alt="bb-sonam"/><br /><sub><b>bb-sonam</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=bb-sonam" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alQlagin"><img src="https://avatars.githubusercontent.com/u/3256488?v=4?s=100" width="100px;" alt="Alex Kulagin"/><br /><sub><b>Alex Kulagin</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=alQlagin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/subodhyadav712"><img src="https://avatars.githubusercontent.com/u/36027830?v=4?s=100" width="100px;" alt="Subodh Kumar Yadav"/><br /><sub><b>Subodh Kumar Yadav</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=subodhyadav712" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/harshalganbote"><img src="https://avatars.githubusercontent.com/u/60728890?v=4?s=100" width="100px;" alt="harshalganbote"/><br /><sub><b>harshalganbote</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=harshalganbote" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/christianopaets"><img src="https://avatars.githubusercontent.com/u/43338174?v=4?s=100" width="100px;" alt="christianopaets"/><br /><sub><b>christianopaets</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=christianopaets" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/velechva"><img src="https://avatars.githubusercontent.com/u/13340931?v=4?s=100" width="100px;" alt="Victor Velechovsky"/><br /><sub><b>Victor Velechovsky</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=velechva" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.mapianist.com"><img src="https://avatars.githubusercontent.com/u/7777929?v=4?s=100" width="100px;" alt="Heo"/><br /><sub><b>Heo</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=leo6104" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://martin.solos.ventures/"><img src="https://avatars.githubusercontent.com/u/4084527?v=4?s=100" width="100px;" alt="Martin DONADIEU"/><br /><sub><b>Martin DONADIEU</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=riderx" title="Code">💻</a> <a href="#userTesting-riderx" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nicolasl-alight"><img src="https://avatars.githubusercontent.com/u/133889962?v=4?s=100" width="100px;" alt="Nico"/><br /><sub><b>Nico</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=nicolasl-alight" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=nicolasl-alight" title="Documentation">📖</a> <a href="#platform-nicolasl-alight" title="Packaging/porting to new platform">📦</a> <a href="#userTesting-nicolasl-alight" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zaizac"><img src="https://avatars.githubusercontent.com/u/9007583?v=4?s=100" width="100px;" alt="zaizac"/><br /><sub><b>zaizac</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=zaizac" title="Code">💻</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/pulls?q=is%3Apr+reviewed-by%3Azaizac" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nicolasleb"><img src="https://avatars.githubusercontent.com/u/4135062?v=4?s=100" width="100px;" alt="nicolasleb"/><br /><sub><b>nicolasleb</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=nicolasleb" title="Code">💻</a> <a href="#maintenance-nicolasleb" title="Maintenance">🚧</a> <a href="#platform-nicolasleb" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/pulls?q=is%3Apr+reviewed-by%3Anicolasleb" title="Reviewed Pull Requests">👀</a> <a href="#userTesting-nicolasleb" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jljabben"><img src="https://avatars.githubusercontent.com/u/5000255?v=4?s=100" width="100px;" alt="jlj"/><br /><sub><b>jlj</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=jljabben" title="Code">💻</a> <a href="#userTesting-jljabben" title="User Testing">📓</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/issues?q=author%3Ajljabben" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ahmedasif1"><img src="https://avatars.githubusercontent.com/u/5271212?v=4?s=100" width="100px;" alt="Ahmed Asif"/><br /><sub><b>Ahmed Asif</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/issues?q=author%3Aahmedasif1" title="Bug reports">🐛</a> <a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=ahmedasif1" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/snmhinge"><img src="https://avatars.githubusercontent.com/u/10630821?v=4?s=100" width="100px;" alt="snmhinge"/><br /><sub><b>snmhinge</b></sub></a><br /><a href="https://github.com/webcat12345/ngx-intl-tel-input/commits?author=snmhinge" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
