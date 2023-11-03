const { defineConfig } = require('cypress');
const { isFileExist, findFiles } = require('cy-verify-downloads');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  execTimeout: 60000,
  taskTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  env: {
    TEST_SERVER_HOST_NAME: process.env.TEST_SERVER_HOST_NAME,
    ACCAUNT_LOGIN: 'admin@nanoheal.com',
    ACCAUNT_PASSWORD: 'nanoheal@123',
    apiKey: '7cVDWy8AexSbmyeCNgiSIi:2HOU19RpTBvgWvb8P12N4l',
  },
  viewportWidth: 1600,
  viewportHeight: 660,
  chromeWebSecurity: false,
  experimentalNetworkStubbing: true,
  e2e: {
    specPattern: [
      // 'cypress/e2e/tests/empty-db/profilewiz.cy.js',
      'cypress/e2e/tests/checkSoftwareDistributin.cy.js',
      'cypress/e2e/tests/empty-db/editSoftwareDistribution.cy.js',
      // 'cypress/e2e/tests/empty-db/notificationImport.cy.js',
      'cypress/e2e/tests/empty-db/checkUserDefaultRole.cy.js',
      'cypress/e2e/tests/empty-db/calendarWidget.cy.js',
      'cypress/e2e/tests/empty-db/automationAnalytics.cy.js',
      'cypress/e2e/tests/empty-db/checkAuthorization.cy.js',
      'cypress/e2e/tests/e2e.cy.js',
      //'cypress/e2e/tests/clientFileDownload.cy.js',
      'cypress/e2e/tests/empty-db/addSite.cy.js',
      'cypress/e2e/tests/empty-db/ticketingWizard.cy.js', // (used in services.cy.js)
      'cypress/e2e/tests/empty-db/services.cy.js', // depends on from reportEventsApi and ticketingWizard
      'cypress/e2e/tests/empty-db/editSoftwareDistribution.cy.js',
    ],
    baseUrl: `https://` + (process.env.TEST_SERVER_HOST_NAME || 'staging.nanoheal.work'),
    setupNodeEvents(on, config) {
      on('task', { isFileExist, findFiles, downloadFile });
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
