// For CDD TAR import and execute
// Conf ts with specs array
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
specs: [
        '../tar/spec01.ts',
        '../tar/spec02.ts',
        '../tar/spec03.ts',
        '../tar/spec04.ts'
        ],

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
