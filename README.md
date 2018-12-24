# Internation Telephone Input for Angular (NgxIntlTelInput)

This package is a rewrite of [ngx-intl-tel-input](https://github.com/webcat12345/ngx-intl-tel-input).
It's not maintained anymore by the original author, so I've updated it to support Angular 7 with ReactiveFormsModule and FormsModule.

It supports validation with [google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber).

In addition it has a new input ```[cssClass]``` which allows to replace default Bootstrap class ```.control-form```. You can replace it with your own class name if you don't want your inbox to be styled by Bootstrap.

## Installation

### Install Dependencies

```$ npm install intl-tel-input --save```

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

Or this Stackblitz url (TODO: add URL).

```html

<form #f="ngForm" [formGroup]="phoneForm">
  <ngx-intl-tel-input
  [cssClass]="'custom'"
  [preferredCountries]="['us', 'gb']"
  [enablePlaceholder]="true"
  name="phone"
  formControlName="phone"></ngx-intl-tel-input>
</form>

```

## Options

| Options            | Type                   | Default            | Description                                                   |
| -------------------|------------------------|--------------------|---------------------------------------------------------------|
| cssClass           | ```string```           | ```control-form``` | Bootstrap input css class or your own custom one.             |
| preferredCountries | ```string[]```         | ```[]```           | List of country abbreviations, which will appear at the top.  |
| enablePlaceholder  | ```boolean```          | ```true```         | Input placeholder text, which addapts to the country selected.|

## Library Contributions

- Fork repo.
- Update ```./projects/ngx-intl-tel-input```
- Build / test library.
- Update ```./src/app``` with new functionality.
- Update README.md
- Pull request.

### Helpful commands

- Build lib: ```$ npm run build_lib```
- Create package: ```$ npm run npm_pack```
- Build lib and create package: ```$ npm run package```

### Use localy

After building and creating package, you can use it localy too.

In your project run:

```$ npm install --save {{path to your local '*.tgz' package file}}```
