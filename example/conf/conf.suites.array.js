// CDD TAR conf js Suites with Specs Arrays
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
suites: {
        "spec01_02": ['../tar/spec01.ts',
                      '../tar/spec02.ts'],
        "spec03_04": ['../tar/spec03.ts',
                      '../tar/spec04.ts']
	},
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
