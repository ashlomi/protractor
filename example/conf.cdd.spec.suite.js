// CDD TAR conf js specs + suites file
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
suites: {		
	      "00_logIn_suite": ['/login/login.spec.js'],
        "00_logInSaas_suite": '/login/loginSaas.spec.js',
        "01_releasesPageObject_suite": ['/releases/01.1.releasesPage.spec.js',
                                  '/releases/01.2.createRelease.spec.js',
                                  '/releases/01.3.releaseActions.spec.js'],
        "02_externalTask_suite": '/tasks/externalTask.spec.js',
        "03_usersPageObjects_suite": ['/users/*.users.spec.js'],
        "04_releasePageObjects_suite": '/release/04release.spec.js',
        "05_mainWindowObjects_suite": '/mainWindow/05mainWindowPO.spec.js'
	},        
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
