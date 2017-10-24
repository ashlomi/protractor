
// CDD TAR - fail test
// conf suites file
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
suites: {
        "Fail01": '../tar/fail01.ts',
	      "fail02": '../tar/fail02.ts',
        "fail03": '../tar/fail03.ts',
        "fail04": '../tar/fail04.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
