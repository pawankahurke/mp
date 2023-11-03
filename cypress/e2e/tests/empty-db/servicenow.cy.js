import { login, serviceNow, sites, randomString, darts, census, alertConfiguration, notifications } from '../../../helpers/test-utils.js';
import { dart148_OneWaySynchronization, sendRawEvent, dart308_PersonalAnalytics, userAgents } from '../../../helpers/client-events.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('servicenow test (empty-db)', () => {
  it('Test for servicenow', () => {
    cy.visit('/Dashboard');
    login();
    serviceNow();

    cy.visit('/Dashboard/cron/c-crmincident.php');
    cy.visit('/Dashboard/ticketingwizard/');
  });
});
