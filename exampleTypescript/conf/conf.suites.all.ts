// CDD TAR
// conf suites file with all ts specs
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
suites: {
        "fail01.ts": '../tar/fail01.ts',
	      "fail02.ts": '../tar/fail02.ts',
        "spec.ts": '../tar/spec.ts',
        "spec01.ts": '../tar/spec01.ts',
        "spec02.ts": '../tar/spec02.ts',
        "spec03.ts": '../tar/spec03.ts',
        "spec04.ts": '../tar/spec04.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
