import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('iframe with charts test (empty-db)', () => {

    it('test for iframe with charts on Automation analytics', () => {
        cy.visit('/Dashboard');
        login();
        
        cy.get('[data-qa=menu-id-907]').click({ force: true });

        cy.get('div[class=ant-card-body]').should('not.be.empty');

        cy.get('#Iframe').should('be.visible');

        cy.get('#Iframe').should('have.attr', 'src').should('include','https://');
    });
});