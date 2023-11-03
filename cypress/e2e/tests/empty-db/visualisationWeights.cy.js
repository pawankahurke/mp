import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('visualisationweights test (empty-db)', () => {
    it('visualisationweights', () => {
      cy.visit('/Dashboard');
      login();

      cy.visit('/Dashboard/weights/#');

      cy.contains('Next').click()

      cy.get('#notifyDtl_lengthSel').select('10', {force: true})

      cy.get('#notifyDtl_lengthSel').select('100', {force: true})

      cy.get('#weightsTable tr td').contains('Survey')

    });
});
