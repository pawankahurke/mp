/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>
import { clientFileDownload } from '../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('E2E clientFileDownload', () => {
  it('clientFileDownload', () => {
    cy.visit('/Dashboard');

    clientFileDownload();
  });
});
