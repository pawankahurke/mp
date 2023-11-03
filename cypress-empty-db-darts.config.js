const { defineConfig } = require('cypress');

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
  },
  viewportWidth: 1600,
  viewportHeight: 660,
  chromeWebSecurity: false,
  experimentalNetworkStubbing: true,
  e2e: {
    specPattern: [
      'cypress/e2e/tests/darts/automation.cy.js', // depends from gatewayApi.cy.js
      'cypress/e2e/tests/darts/darts_60_89_270.cy.js', // depends from gatewayApi.cy.js
      'cypress/e2e/tests/darts/darts_69_192_304.cy.js', // depends from gatewayApi.cy.js
      'cypress/e2e/tests/darts/darts_253_266_100.cy.js', // depends from gatewayApi.cy.js
      'cypress/e2e/tests/darts/darts_306_288_190.cy.js', // depends from gatewayApi.cy.js
      //'cypress/e2e/tests/darts/ios_linux_macos_config.cy.js',
    ],
    baseUrl: `https://` + (process.env.TEST_SERVER_HOST_NAME || 'staging.nanoheal.work'),
  },
});
