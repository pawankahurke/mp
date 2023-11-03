const { defineConfig } = require('cypress');
const { isFileExist, findFiles } = require('cy-verify-downloads');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  projectId: '1d5nmu',
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
      'cypress/e2e/tests/empty-db/dart304.cy.js',

      'cypress/e2e/tests/empty-db/sso-saml1.cy.js',
      'cypress/e2e/tests/empty-db/sso-saml2.cy.js', // depends from sso-saml1.cy.js
      'cypress/e2e/tests/empty-db/sso-userApproval.cy.js', // depends on from sso-saml2.cy.js and sso-saml1.cy.js

      'cypress/e2e/tests/empty-db/export_function.cy.js', // long test ~1 minute

      'cypress/e2e/tests/empty-db/servicenow.cy.js',
      'cypress/e2e/tests/empty-db/configurationBrowser.cy.js',
      'cypress/e2e/tests/empty-db/customizationFileUpload.cy.js',
      'cypress/e2e/tests/empty-db/messageConfiguration.cy.js',
      'cypress/e2e/tests/empty-db/roleUserModule.cy.js',
      'cypress/e2e/tests/empty-db/checkAddNewUser.cy.js',
      // 'cypress/e2e/tests/empty-db/1checkExportGroupFromCsv.cy.js',
      // 'cypress/e2e/tests/empty-db/2checkExportEditGroupFromCsv.cy.js',
      'cypress/e2e/tests/empty-db/servicenowUI.cy.js',
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
