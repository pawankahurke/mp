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
      'cypress/e2e/tests/empty-db/e2e-empty-db.cy.js',
      'cypress/e2e/tests/empty-db/nhmysql.cy.js',
      'cypress/e2e/tests/empty-db/exportNotification.cy.js',
      'cypress/e2e/tests/empty-db/createAccount.cy.js',
      'cypress/e2e/tests/empty-db/checkRole.cy.js',
      'cypress/e2e/tests/empty-db/groups.cy.js',
      'cypress/e2e/tests/empty-db/notificationsPage.cy.js',
      'cypress/e2e/tests/empty-db/userActivityAudit.cy.js',
      'cypress/e2e/tests/empty-db/visualisationWeights.cy.js',
      'cypress/e2e/tests/empty-db/alertConfiguration.cy.js',
      'cypress/e2e/tests/empty-db/coredbn_upload.cy.js',
      'cypress/e2e/tests/empty-db/uploadDartConfigFile.cy.js',
      'cypress/e2e/tests/empty-db/gatewayApi.cy.js',
      'cypress/e2e/tests/empty-db/activeDirectory.cy.js',
      'cypress/e2e/tests/empty-db/ticketingWizard.cy.js',
      'cypress/e2e/tests/empty-db/reportEventsApi.cy.js', // depends on from coredbn_upload and uploadDartConfigFile and e2e-empty-db.cy.js
      'cypress/e2e/tests/empty-db/services.cy.js', // depends on from reportEventsApi and ticketingWizard
      'cypress/e2e/tests/empty-db/imitation_install_patch.cy.js',
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
