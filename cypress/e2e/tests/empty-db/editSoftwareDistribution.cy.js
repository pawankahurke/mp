import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Test edit and save Software Distribution', () => {

  it('Test edit and save Software Distribution', () => {
    cy.visit('/Dashboard');
    login();

    //create
    cy.visit('/Dashboard/softdist/');
    cy.get('#forSoftwareDistribution').click();
    cy.get('[data-qa="addNewSoftware"]').click();
    cy.get('button[data-id="platform"]').click();
    cy.get('span').contains('Windows').click();
    cy.get('button[data-id="types"]').click();
    cy.get('span').contains('File').click();
    cy.get('#otrep').click();
    cy.get('#packName').type('TESTCYPRESS');
    cy.get('#packDesc').type('TEST');
    cy.get('#version').type('1.2');
    cy.get('#forTestGlobalYes').click();
    cy.get('#addPackage').click();

    //edit
    cy.get('[title="TESTCYPRESS"]').click();
    cy.get('#forSoftwareDistribution').click();
    cy.get('#configurePackage').click();
    cy.wait(3000);
    cy.get('#configpackagenameid').type('_test');
    cy.get('.btnSaveSWD').click({force: true});
    cy.get('[title="TESTCYPRESS_test"]').click();
    cy.get('#forSoftwareDistribution').click();
    cy.get('#deletePackage').click();
    cy.get('button').contains('Yes, delete it!').click();

  });
});
