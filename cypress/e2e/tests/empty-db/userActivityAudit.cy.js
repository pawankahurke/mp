import { login, logOut } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('useractivity test (empty-db)', () => {
  it('useractivity', () => {
    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/auditlog/');
    cy.get(`#auditlog_datatable`).should('be.visible');

    cy.contains('Next', {timeout: 10000 }).click();

    cy.visit('/Dashboard/audit/');

    cy.visit('/Dashboard/autolog/');

    cy.visit('/Dashboard/loginaudit/');

      cy.visit('/Dashboard/home/');

      cy.visit('/Dashboard/watcher/');

      cy.get('#AlertListGrid').should('not.be.empty');

      cy.visit('/Dashboard/auditlog/');

      cy.get('#auditlog_datatable').should('not.be.empty');

      cy.get('#created1').click();

      cy.get('#auditlog_datatable tr td [title="admin"]').contains('admin')

    });
});
