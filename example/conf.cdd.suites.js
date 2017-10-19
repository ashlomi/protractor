// CDD TAR conf js suites file
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
suites: {		
	"00_logIn": ['/login/login.spec.js'],
        "00_logInSaas": '/login/loginSaas.spec.js',
        "01_releasesPageObject": ['/releases/01.1.releasesPage.spec.js',
                                  '/releases/01.2.createRelease.spec.js',
                                  '/releases/01.3.releaseActions.spec.js'],
        "02_externalTask": '/tasks/externalTask.spec.js',
        "03_usersPageObjects": ['/users/03.1.users.spec.js',
                                '/users/03.2.localUsers.spec.js',
                                '/users/03.3.remoteUsers.spec.js'],
        "04_releasePageObjects": '/release/04release.spec.js',
        "05_mainWindowObjects": '/mainWindow/05mainWindowPO.spec.js',
        "06_calendar": '/calendar/06calendar.spec.js',
        "07_executionTask": '/execution/tasks/07executionTask.spec.js',
        "08_releaseToken": '/releaseTokens/08releaseTokens.spec.js',
        "09_executionPhase": '/execution/phases/09executionPhase.spec.js',
        "10_executionRelease": '/execution/releases/10executionRelease.spec.js',
        "11_navBar": '/toolBar/navBar/11navBar.spec.js',
        "12_endpoints": '/endpoints/endpoints.spec.js',
        "13_plugins": '/plugins/13pluginsE2E.spec.js',
        "14_dashboard": '/dashboard/14dashboard.spec.js',
        "15_reports": '/reports/*.spec.js',
        "16_manualApprovals": '/execution/manualApproval/16manualApproval.spec.js',
        "17_aboutHelp": '/toolBar/help/about/about.spec.js',
        "18_applications": '/applications/applicationsPage.spec.js',
        "20_manualExecution": '/executor/manualExecution.spec.js',
        "21_changePassword": '/settings/changePassword/21changePassword.spec.js',
        "22_userPreferences": '/settings/userPreferences/22userPreferences.spec.js',
        "23_SMTP": '/settings/smtp/23smtp.spec.js',
        "24_userManagementSystem": '/settings/userManagementSystem/24userManagementSystem.spec.js',
        "25_database": '/settings/database/25database.spec.js',
        "26_tracks": [
            '/tracks/26.1.tracksPage.spec.js',
            '/tracks/26.2.trackActions.spec.js',
            '/tracks/26.3.trackIndications.spec.js',
            '/tracks/26.4.releaseInTrack.spec.js',
            '/tracks/26.5.createTrack.spec.js',
            '/tracks/26.6.trackPage.spec.js',
            '/tracks/26.7.approveReleaseInTrack.spec.js'
        ],
        "27_releaseAnalysis": '/reports/releaseAnalysis/27.releaseAnalysis.spec.js',
        "28_environments": '/reports/environment/28.environmentReport.spec.js',
        "29_applications": '/reports/application/29.applicationReport.spec.js',
        "30_customerFeedback": '/customerFeedback/customerFeedback.spec.js',
        "31_externalContent": '/externalApplicationContent/31.externalContent.spec.js',
        "32_testAssetsCatalog": '/testAssetsCatalog/testAssetsCatalog.spec.js',
        // keep it running last !!!
        "99_sanity": '/sanity/00sanity.spec.js',
        "100_apisHelp": '/toolBar/help/apisHelp/restHelp.spec.js',
        "101_saas_HomePage": '/saas/homePage.spec.js',
        "102_mobileHomePage": '/saas/homePage.tablet.spec.js',
        "103_invitation": '/invite/invite.spec.js',
        "104_sanity_saas": '/saas/sanity/sanity_saas.spec.js'
	},  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
