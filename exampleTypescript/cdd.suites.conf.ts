// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  
// Suites taken from CDD protractor tests
// not to be executed here
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
        "05_mainWindowObjects": '/mainWindow/05mainWindowPO.spec.ts',
        "06_calendar": '/calendar/06calendar.spec.ts',
        "07_executionTask": '/execution/tasks/07executionTask.spec.ts',
        "08_releaseToken": '/releaseTokens/08releaseTokens.spec.ts',
        "09_executionPhase": '/execution/phases/09executionPhase.spec.ts',
        "10_executionRelease": '/execution/releases/10executionRelease.spec.ts',
        "11_navBar": '/toolBar/navBar/11navBar.spec.ts',
        "12_endpoints": '/endpoints/endpoints.spec.ts',
        "13_plugins": '/plugins/13pluginsE2E.spec.ts',
        "14_dashboard": '/dashboard/14dashboard.spec.ts',
        "15_reports": '/reports/*.spec.ts',
        "16_manualApprovals": '/execution/manualApproval/16manualApproval.spec.ts',
        "17_aboutHelp": '/toolBar/help/about/about.spec.ts',
        "18_applications": '/applications/applicationsPage.spec.ts',
        "20_manualExecution": '/executor/manualExecution.spec.ts',
        "21_changePassword": '/settings/changePassword/21changePassword.spec.ts',
        "22_userPreferences": '/settings/userPreferences/22userPreferences.spec.ts',
        "23_SMTP": '/settings/smtp/23smtp.spec.ts',
        "24_userManagementSystem": '/settings/userManagementSystem/24userManagementSystem.spec.ts',
        "25_database": '/settings/database/25database.spec.ts',
        "26_tracks": [
            '/tracks/26.1.tracksPage.spec.ts',
            '/tracks/26.2.trackActions.spec.ts',
            '/tracks/26.3.trackIndications.spec.ts',
            '/tracks/26.4.releaseInTrack.spec.ts',
            '/tracks/26.5.createTrack.spec.ts',
            '/tracks/26.6.trackPage.spec.ts',
            '/tracks/26.7.approveReleaseInTrack.spec.ts'
        ],
        "27_releaseAnalysis": '/reports/releaseAnalysis/27.releaseAnalysis.spec.ts',
        "28_environments": '/reports/environment/28.environmentReport.spec.ts',
        "29_applications": '/reports/application/29.applicationReport.spec.ts',
        "30_customerFeedback": '/customerFeedback/customerFeedback.spec.ts',
        "31_externalContent": '/externalApplicationContent/31.externalContent.spec.ts',
        "32_testAssetsCatalog": '/testAssetsCatalog/testAssetsCatalog.spec.ts',
        // keep it running last !!!
        "99_sanity": '/sanity/00sanity.spec.ts',
        "100_apisHelp": '/toolBar/help/apisHelp/restHelp.spec.ts',
        "101_saas_HomePage": '/saas/homePage.spec.ts',
        "102_mobileHomePage": '/saas/homePage.tablet.spec.ts',
        "103_invitation": '/invite/invite.spec.ts',
        "104_sanity_saas": '/saas/sanity/sanity_saas.spec.ts'
	},
			
//   suites: {		
// 	00_logIn: ['/login/login.spec.ts'],
//         00_logInSaas: '/login/loginSaas.spec.ts',
//         01_releasesPageObject: ['/releases/01.1.releasesPage.spec.ts',
//                                   '/releases/01.2.createRelease.spec.ts',
//                                   '/releases/01.3.releaseActions.spec.ts'],
//         02_externalTask: '/tasks/externalTask.spec.ts',
//         03_usersPageObjects: ['/users/03.1.users.spec.ts',
//                                 '/users/03.2.localUsers.spec.ts',
//                                 '/users/03.3.remoteUsers.spec.ts'],
//         04_releasePageObjects: '/release/04release.spec.ts',
//         05_mainWindowObjects: '/mainWindow/05mainWindowPO.spec.ts',
//         06_calendar: '/calendar/06calendar.spec.ts',
//         07_executionTask: '/execution/tasks/07executionTask.spec.ts',
//         08_releaseToken: '/releaseTokens/08releaseTokens.spec.ts',
//         09_executionPhase: '/execution/phases/09executionPhase.spec.ts',
//         10_executionRelease: '/execution/releases/10executionRelease.spec.ts',
//         11_navBar: '/toolBar/navBar/11navBar.spec.ts',
//         12_endpoints: '/endpoints/endpoints.spec.ts',
//         13_plugins: '/plugins/13pluginsE2E.spec.ts',
//         14_dashboard: '/dashboard/14dashboard.spec.ts',
//         15_reports: '/reports/*.spec.ts',
//         16_manualApprovals: '/execution/manualApproval/16manualApproval.spec.ts',
//         17_aboutHelp: '/toolBar/help/about/about.spec.ts',
//         18_applications: '/applications/applicationsPage.spec.ts',
//         20_manualExecution: '/executor/manualExecution.spec.ts',
//         21_changePassword: '/settings/changePassword/21changePassword.spec.ts',
//         22_userPreferences: '/settings/userPreferences/22userPreferences.spec.ts',
//         23_SMTP: '/settings/smtp/23smtp.spec.ts',
//         24_userManagementSystem: '/settings/userManagementSystem/24userManagementSystem.spec.ts',
//         25_database: '/settings/database/25database.spec.ts',
//         26_tracks: [
//             '/tracks/26.1.tracksPage.spec.ts',
//             '/tracks/26.2.trackActions.spec.ts',
//             '/tracks/26.3.trackIndications.spec.ts',
//             '/tracks/26.4.releaseInTrack.spec.ts',
//             '/tracks/26.5.createTrack.spec.ts',
//             '/tracks/26.6.trackPage.spec.ts',
//             '/tracks/26.7.approveReleaseInTrack.spec.ts'
//         ],
//         27_releaseAnalysis: '/reports/releaseAnalysis/27.releaseAnalysis.spec.ts',
//         28_environments: '/reports/environment/28.environmentReport.spec.ts',
//         29_applications: '/reports/application/29.applicationReport.spec.ts',
//         30_customerFeedback: '/customerFeedback/customerFeedback.spec.ts',
//         31_externalContent: '/externalApplicationContent/31.externalContent.spec.ts',
//         32_testAssetsCatalog: '/testAssetsCatalog/testAssetsCatalog.spec.ts',
//         // keep it running last !!!
//         99_sanity: '/sanity/00sanity.spec.ts',
//         100_apisHelp: '/toolBar/help/apisHelp/restHelp.spec.ts',
//         101_saas_HomePage: '/saas/homePage.spec.ts',
//         102_mobileHomePage: '/saas/homePage.tablet.spec.ts',
//         103_invitation: '/invite/invite.spec.ts',
//         104_sanity_saas: '/saas/sanity/sanity_saas.spec.ts'
// 	},
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
