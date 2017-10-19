// CDD TAR invalid conf ts file
// Suite names start with a number and not set as strings indide quotes

import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'spec.js' ],
  suites: {
      0smoke: 'spec.ts',
      1full: 'failed.ts'
   },

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
