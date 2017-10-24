// CDD TAR
// conf suites file
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
suites: {
        "Suite01": ['../tar/spec.ts','../tar/spec01.ts'],
        "Suite02": '../tar/spec02.ts',
        "Suite03": '../tar/spec03.ts',
        "Suite04": '../tar/spec04.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
