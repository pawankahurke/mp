import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('configuration browser test (empty-db)', () => {
  it('Test for configuration browser', () => {

    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/custom/config_browser.php');

    cy.get('#explain_login').click({ force: true });

    cy.get('#config-browser').click({ force: true });

    cy.get('#configbrowshow', { timeout: 4000 }).should('be.visible');

    cy.get('[data-target="configbrowshow"]').click({ multiple: true, force: true });

    cy.get('#explain_login').click({ force: true });

    cy.get('#config-kiosk').click({ force: true });

    cy.get('#configkiosk', { timeout: 4000 }).should('be.visible');

    cy.get('[data-target="configkiosk"]').click({ multiple: true, force: true });

    cy.get('#edit_configurations').click({ force: true });

    //cy.get('#explain_login').click({ force: true });
  });
});