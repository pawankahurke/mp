import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Test UI servicenow', () => {

  it('Test UI servicenow', () => {
    cy.visit('/Dashboard');
    login();
    cy.visit('/Dashboard/ticketingwizard/');
    cy.get('#forTW').click();
    cy.get('[data-qa="configurationForTicketing"]').click();
    cy.get('[data-id="tw-customer"]').click();
      if (cy.get('[data-original-index="2"]').contains('Accenture_Testing').should('be.exist')) {
        cy.get('[data-original-index="2"]').contains('Accenture_Testing').click({force: true});
        cy.get('#tw-crmurl').clear();
        cy.get('#tw-crmurl').type('https://dev101868.service-now.com/');
        cy.get('#tw-crmusername').clear();
        cy.get('#tw-crmusername').type('admin');
        cy.get('#tw-crmpassword').clear();
        cy.get('#tw-crmpassword').type('M05rLWkhdmoyUE5a')
        cy.get('#resolutionTitleBlock').click();
        cy.get('#tw-tickAutoheal').click({force: true});
        cy.get('#notificationTitleBlock').click();
        cy.get('#tw-tickNotificationP1').click({force: true});
        cy.get('#addDeploymentSiteBtn').click();
      }
  });
});
