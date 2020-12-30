// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'core-js/proposals/reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

// Matchers
beforeEach(() => {
	jasmine.addMatchers({
		toHaveCssClass: function(util, customEqualityTests) {
			return {compare: buildError(false), negativeCompare: buildError(true)};

			function buildError(isNot: boolean) {
				return function(actual: HTMLElement, className: string) {
					return {
						pass: actual.classList.contains(className) === !isNot,
						message: `Expected ${actual.outerHTML} ${isNot ? 'not ' : ''}to contain the CSS class "${className}"`
					};
				};
			}
		}
	});
});
