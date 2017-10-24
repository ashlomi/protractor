
// CDD TAR - failed and passed suites
// conf suites file
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
suites: {
	"fail01": '../tar/fail01.ts',
	"fail02": '../tar/fail02.ts',
	"pass01": '../tar/spec01.ts',
	"pass02": '../tar/spec02.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
