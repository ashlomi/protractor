// CDD TAR conf js - failed suites
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
        "fail03.js": '../tar/fail03.js',
        "fail04.js": '../tar/fail04.js'
       	},
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
