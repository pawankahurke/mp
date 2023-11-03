import { login, activeDirectory } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('active directory page test (empty-db)', () => {
  it('Test for active directory page', () => {

    cy.visit('/Dashboard');
    login();

    activeDirectory();

    cy.contains('Configure Questions', { timeout: 10000 }).click();

    cy.contains('Change Password', { timeout: 10000 }).click();

    cy.contains('Reset Security Answers', { timeout: 10000 }).click();

    cy.contains('Configure Questions', { timeout: 10000 }).click();

    cy.contains('Change Password', { timeout: 10000 }).click();

    cy.contains('Reset Security Answers', { timeout: 10000 }).click();

    cy.contains('Unlock Account', { timeout: 10000 }).click();

});
});