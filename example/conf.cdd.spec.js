// CDD TAR conf js spec file
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [
        '/releases/01.1.releasesPage.spec.js',
        '/releases/01.2.createRelease.spec.js',
        '/releases/01.3.releaseActions.spec.js',
        '/users/*.spec.js',
        '/tracks/26.1.tracksPage.spec.js',
        '/tracks/26.2.trackActions.spec.js',
        '/tracks/26.3.trackIndications.spec.js',
        '/tracks/26.4.releaseInTrack.spec.js',
        '/tracks/26.5.createTrack.spec.js',
        '/tracks/26.6.trackPage.spec.js',
        '/tracks/26.7.approveReleaseInTrack.spec.js'
        ],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
