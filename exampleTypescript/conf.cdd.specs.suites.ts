// For CDD TAR import specs+suites
// Conf ts with specs array and suites
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
// Specs taken from CDD protractor tests
// not to be executed here
specs: [
        '/spec/releases/01.1.releasesPage.spec.ts',
	'/spec/releases/01.2.createRelease.spec.ts',
        '/spec/releases/01.3.releaseActions.spec.ts',
	'/spec/users/*.spec.ts',
	'/spec/tracks/26.1.tracksPage.spec.ts',
	'/spec/tracks/26.2.trackActions.spec.ts',
	'/spec/tracks/26.3.trackIndications.spec.ts',
	'/spec/tracks/26.4.releaseInTrack.spec.ts',
	'/spec/tracks/26.5.createTrack.spec.ts',
	'/spec/tracks/26.6.trackPage.spec.ts',
	'/spec/tracks/26.7.approveReleaseInTrack.spec.ts'
        ],
	
suites: {		
	"00_logIn_suite": ['/login/login.spec.ts'],
        "00_logInSaas_suite": '/login/loginSaas.spec.ts',
        "01_releasesPageObject_suite": ['/releases/01.1.releasesPage.spec.ts',
                                  '/releases/01.2.createRelease.spec.ts',
                                  '/releases/01.3.releaseActions.spec.ts'],
        "02_externalTask_suite": '/tasks/externalTask.spec.ts',
        "03_usersPageObjects_suite": ['/users/*.users.spec.ts'],
        "04_releasePageObjects_suite": '/release/04release.spec.ts',
        "05_mainWindowObjects_suite": '/mainWindow/05mainWindowPO.spec.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
