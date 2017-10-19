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
// specs: [
//         '/releases/01.1.releasesPage.spec.ts',
// 	'/releases/01.2.createRelease.spec.ts',
//         '/releases/01.3.releaseActions.spec.ts',
// 	'/users/*.spec.ts',
// 	'/tracks/26.1.tracksPage.spec.ts',
// 	'/tracks/26.2.trackActions.spec.ts',
// 	'/tracks/26.3.trackIndications.spec.ts',
// 	'/tracks/26.4.releaseInTrack.spec.ts',
// 	'/tracks/26.5.createTrack.spec.ts',
// 	'/tracks/26.6.trackPage.spec.ts',
// 	'/tracks/26.7.approveReleaseInTrack.spec.ts'
//         ],
	
suites: {
	"00_logIn": ['/login/login.spec.ts'],
	"00_logInSaas": '/login/loginSaas.spec.ts',
	"01_releasesPageObject": ['/releases/01.1.releasesPage.spec.ts',
				  '/releases/01.2.createRelease.spec.ts',
				  '/releases/01.3.releaseActions.spec.ts'],
	"02_externalTask": '/tasks/externalTask.spec.ts',
	"03_usersPageObjects": ['/users/03.1.users.spec.ts',
				'/users/03.2.localUsers.spec.ts',
				'/users/03.3.remoteUsers.spec.ts'],
	"04_releasePageObjects": '/release/04release.spec.ts',
	"05_mainWindowObjects": '/mainWindow/05mainWindowPO.spec.ts'
	},

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
© 2017 GitHub, Inc.
