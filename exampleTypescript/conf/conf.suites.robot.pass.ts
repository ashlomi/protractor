// CDD TAR
// conf suites file
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
suites: {
  "RoboSuite01.pass": '../tar/spec.pass.1.ts',
	"RoboSuite02.pass": '../tar/spec.pass.2.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
