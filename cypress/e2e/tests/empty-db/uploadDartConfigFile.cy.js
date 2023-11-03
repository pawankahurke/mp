import { login } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Test for check csv dart import', () => {
  it('upload csv file for dart import', () => {
    const UploadFile = 'tests/dartConfiguration.csv';
    cy.visit('/Dashboard/');
    login();
    cy.visit('/Dashboard/csvdart/');
    cy.get('button').contains('Clear all records').click();
    cy.get('#csvfile').selectFile(UploadFile, { force: true, mimeType: 'application/octet-stream' });
    cy.get('#uloadbtn').click();
    cy.contains('Import successfully done inserted');
  });
});
