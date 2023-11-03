import { login } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', () => false);

// Important! This test should be performed after 1checkExportGroupFromCsv.cy.js


describe('Test for check export edit group from csv file', () => {
  it('upload csv file for edit group', () => {
    const UploadFile = 'cypress/fixtures/forCreateTest_group.csv';
    cy.visit('/Dashboard/');
    login();
    cy.visit('/Dashboard/device/');
    cy.get("[title='Test_group']").dblclick();
    cy.get('.editOption').click();
    cy.get('#csv_file_edit').selectFile(UploadFile, { force: true, mimeType: 'application/octet-stream' });
    cy.get("[onclick='csvgroupeditinside();']").click();
    cy.get("[data-notify='message']").contains('Group updated successfully.Successfully updated csv group info');
    cy.get("[title='Test_group']").contains('Test_group');

    // next we must delete "test_group"

    cy.get("[onclick='callDropDown()']").click();
    cy.get("[onclick='deleteGroup()']").click();
    cy.get('button').contains('Yes, delete it!').click();
  });
});
