import { login, dartsStatusCheck, darts } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('automation test (darts_69_192_304)', () => {
  it('Test for DART 69 (darts list)', () => {
    cy.visit('/Dashboard');
    login();

    /***************************   Test for DART 69 (darts list)       ************************************/

    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa="DART69-AutohealEnable/Disable"]', { timeout: 40000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('.brutusin-form textarea:first').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');

    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa="DART69-AutohealEnable/Disable"]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('.brutusin-form textarea:first', { timeout: 4000 }).should('have.value', 'test');
  });

  it('Test for DART 192 (darts list)', () => {
    /***************************   Test for DART 192 (darts list)       ************************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART192-ProgramExecutionControl]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    //cy.get('[for="BrutusinForms#0_0"]', { timeout: 10000 }).should('exist');
    cy.get('[id="BrutusinForms#0_3"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_4"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_6"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_8"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_9"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_10"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_12"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_13"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_15"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');
    cy.wait(2000);
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART192-ProgramExecutionControl]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_3"]', { timeout: 4000 }).should('have.value', 'test');
    //cy.get('[id="BrutusinForms#0_4"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_6"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_8"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_9"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_10"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_12"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_13"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_15"]', { timeout: 4000 }).should('have.value', 'test');
  });

  it('Test for DART 304 (darts list)', () => {
    /***************************   Test for DART 304 (darts list)       ************************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART304-Profilemanagement]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    //cy.get('[for="BrutusinForms#0_0"]', { timeout: 10000 }).should('exist');
    cy.get('[id="BrutusinForms#0_1"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_5"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_6"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');
    cy.wait(3000);

    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART304-Profilemanagement]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_1"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_5"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_6"]', { timeout: 4000 }).should('have.value', 'test');
  });
});
