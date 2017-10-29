// CDD TAR conf js all suites pass file
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
suites: {
        "example_spec01.js": '../tar/example_spec01.js',
        "example_spec02.js": '../tar/example_spec02.js',
        "example_spec03.js": '../tar/example_spec03.js',
        "example_spec04.js": '../tar/example_spec04.js'
	},
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
