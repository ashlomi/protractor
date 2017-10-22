// CDD TAR conf suites file with wildcards - for import and execute
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
// Suites taken from CDD protractor tests
// not to be executed here
suites: {		
		    "00_specs0X": ['tar/spec0*.ts'],
        "01_spec": 'tar/spec.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
