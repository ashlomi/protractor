// For CDD TAR import and execute with wildcards
// Conf ts with specs array
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
// Specs taken from CDD protractor tests
// not to be executed here
specs: [
        'spec.ts',
        'spec0*.ts'
        ],

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
