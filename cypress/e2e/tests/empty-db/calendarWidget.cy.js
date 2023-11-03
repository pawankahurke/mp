import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('calendar widget test (empty-db)', () => {

    it('test for calendar widget on Automation analytics, Insight : Resolutions executed pages', () => {
        cy.visit('/Dashboard');
        login();

        cy.get('#reportrange').should('not.be.empty');

        cy.get('#reportrange').click();

        cy.contains('li', 'Last 7 Days').click();

        cy.get('#reportrange').should('not.be.empty');

        cy.get('[data-qa=menu-id-908]').click({ force: true });

        cy.get('#reportrange').should('not.be.empty');

        cy.get('#reportrange').click();

        cy.contains('li', 'Last 60 Days').click();

        cy.get('#reportrange').should('not.be.empty');
});
});