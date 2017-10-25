// CDD TAR
// conf suites file - 2 specs in each suite
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
suites: {
        "spec01_02": ['../tar/spec01.ts','../tar/spec02.ts'],
        "spec03_04": ['../tar/spec03.ts','../tar/spec04.ts']
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
