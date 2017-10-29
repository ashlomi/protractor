// CDD TAR
// conf suites file with all ts specs
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
suites: {
        "spec01allPass.ts": '../tar/spec01allPass.ts',
	      "spec02allPass.ts": '../tar/spec02allPass.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
