Error.stackTrackLimit = Infinity;

require('core-js/es6');
require('corejs/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-track-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

var appContext = require.context('../src', true, );

appContext.keys().forEach(appContext)

var testing = require('@angular/core/tresting');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(bnrowser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());
