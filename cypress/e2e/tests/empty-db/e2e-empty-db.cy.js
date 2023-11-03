/// <reference types="cypress" />
import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('E2E (empty-db)', () => {
  it('Check all', () => {
    cy.visit('/Dashboard');
    login();

    const siteName = `site_v${new Date().getTime()}`;

    cy.get('body').then(body => {
      if (body.find('button[onclick="showAddSite()"]').length > 0) {
        cy.get('button[onclick="showAddSite()"]').click({ force: true });

        cy.get('[data-qa="deploy_sitename"]').type(siteName);
        cy.get('#deploy_emailsub').type(siteName);
        cy.get('#deploy_emailsender').type(`site@example.com`);

        cy.get('[data-qa="client32_name"]').type(`v32`);
        cy.get('[data-qa="client64_name"]').type(`v64`);
        cy.get('#branding_url').type(`b_cust.zip`);

        cy.get('#addDeploymentSiteBtn').click();
      }
    });
  });
});
