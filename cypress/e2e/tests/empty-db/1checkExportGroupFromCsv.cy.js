import { login } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Test for check export group from csv file', () => {
  it('upload csv file for creation group', () => {
    const UploadFile = 'cypress/fixtures/forCreateTest_group.csv';
    cy.visit('/Dashboard/');
    login();
    cy.get('#dropdownMenuButton').click();
    cy.get('#TestCI > i').click();
    cy.get("[title='DEV000CI-06602']").click();
    cy.get("[data-qa='saveSelectState']").click();
    cy.visit('/Dashboard/device/');
    cy.get("[onclick='callDropDown()']").click();
    cy.get('#newGroupAddition').click();
    cy.get('#csvradio1').click();
    cy.get('#csv_file1').click();
    cy.get('#csv_file1').selectFile(UploadFile, { force: true, mimeType: 'application/octet-stream' });
    cy.get("[onclick='csvcggroupcreate();']").click();
    cy.get("[data-notify='message']").contains('Groups created successfully');
    cy.get("[title='Test_group']").contains('Test_group');
  });
});
