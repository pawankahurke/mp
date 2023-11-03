import { login, serviceNow } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('ticketing wizard page test (empty-db)', () => {
  it('Test for ticketing wizard page', () => {
    cy.visit('/Dashboard');
    login();

    serviceNow();

    cy.get('#forTW', { timeout: 10000 }).click();

    cy.get('[data-qa=configurationForTicketing]').click({ force: true });

    cy.get('[data-id="tw-customer"]').click();

    // cy.contains('span.text', 'site', { timeout: 10000 }).click();

    cy.get('[id="tw-crmurl"]').type('test', { force: true });
    cy.get('[id="tw-crmusername"]').type('admin', { force: true });
    cy.get('[id="tw-crmpassword"]').type('test', { force: true });

    cy.get('#tw-tickEnable', { timeout: 10000 }).click({ force: true });
    cy.get('[id="tw-tickSelfhelp"]', { timeout: 10000 }).click({ force: true });
    cy.get('[id="tw-tickSchedule"]', { timeout: 10000 }).click({ force: true });
    // cy.get('[id="tw-tickNotification"]', { timeout: 10000 }).click({ force: true });

    cy.get('#addDeploymentSiteBtn').click({ force: true });

    serviceNow();
  });
});
