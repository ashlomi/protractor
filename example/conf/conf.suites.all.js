// CDD TAR conf js All suites file
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
suites: {
        "fail01.js": '../tar/fail01.js',
	      "fail02.js": '../tar/fail02.js',
        "example_spec.js": '../tar/example_spec.js',
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
