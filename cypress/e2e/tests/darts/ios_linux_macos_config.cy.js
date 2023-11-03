import { login, dartsStatusCheck, darts } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('ios linux and macos configs test (darts)', () => {
  it('Test for DART Commands (iOS config)', () => {
    cy.visit('/Dashboard');
    login();

    /***********************   Test for DART Commands (iOS config)    ****************************************/

    darts();

    cy.contains(`iOS Configuration`, { timeout: 2000 }).click({ force: true });

    cy.get('[data-qa=Commands]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    //cy.get('.brutusin-form textarea:first').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');

    darts();

    cy.contains(`iOS Configuration`, { timeout: 2000 }).click({ force: true });
    cy.get('[data-qa=Commands]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('.brutusin-form textarea:first', { timeout: 4000 }).should('have.value', 'test');
  });

   it('Test for DART 801 (Linux config)', () => {
     /************************   Test for DART 801 (Linux config)       ***************************************/

     cy.visit('/Dashboard');
     login();
     darts();

     cy.contains(`Linux Configuration`, { timeout: 2000 }).click({ force: true });

     cy.get('[data-qa=DART801-EventLog]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

     //cy.get('[id="BrutusinForms#0_1"]').clear().type('test', { force: true });

     cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

     cy.get('#loader_submit').should('not.be.visible');

     cy.wait(3000)
     darts();

     cy.contains(`Linux Configuration`, { timeout: 2000 }).click({ force: true });
     cy.get('[data-qa=DART801-EventLog]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

     //cy.get('[id="BrutusinForms#0_1"]', { timeout: 4000 }).should('have.value', 'test');
    });

   it('Test for DART 1001 (macos config list)', () => {
     /*****************************   Test for DART 1001 (macos config list)       **********************************/

     cy.visit('/Dashboard');
     login();
     darts();

     cy.contains(`Mac Configuration`).click();

     cy.get('[data-qa=DART1007-DiskRepair]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

     cy.get('[id="BrutusinForms#0_3"]').clear().type('test', { force: true });

     cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

     cy.get('#loader_submit').should('not.be.visible'); 

     cy.wait(2000)
     darts();
     cy.contains(`Mac Configuration`).click();

     cy.get('[data-qa=DART1007-DiskRepair]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

     cy.get('[id="BrutusinForms#0_3"]', { timeout: 4000 }).should('have.value', 'test');

    });
});
