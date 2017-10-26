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
        "example_spec01_02": ['../tar/example_spec01.js',
                	      '../tar/example_spec02.js'],
        "example_spec03_04": ['../tar/example_spec03.js',
                	      '../tar/example_spec04.js']
	},
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
