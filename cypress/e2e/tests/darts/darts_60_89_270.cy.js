import { login, dartsStatusCheck, darts } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('automation test (darts_60_89_270)', () => {
  /*it('Test for DART 60 (darts list)', () => {
    cy.visit('/Dashboard');
    login();

    /****************************   Test for DART 60 (darts list)       ***********************************/

    /*darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART60-CleanFolders]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    //cy.get('[for="BrutusinForms#0_0"]', { timeout: 10000 }).should('exist');
    cy.get('[id="BrutusinForms#0_4"]').type('test', { force: true });
    cy.get('[id="BrutusinForms#0_5"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_8"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_9"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_12"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_13"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_16"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_17"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');

    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART60-CleanFolders]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_5"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_8"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_9"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_11"]', { timeout: 4000 }).should('have.value', '3');
    cy.get('[id="BrutusinForms#0_13"]', { timeout: 4000 }).should('have.value', 'test');
  });*/

  it('Test for DART 89 (darts list)', () => {
    /***************************   Test for DART 89 (darts list)       ************************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART89-ScheduledProgramExecution1]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    //cy.get('[for="BrutusinForms#0_0"]', { timeout: 10000 }).should('exist');
    cy.get('[id="BrutusinForms#0_2"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_4"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');

    cy.wait(2000);

    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART89-ScheduledProgramExecution1]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_2"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_4"]', { timeout: 4000 }).should('have.value', 'test');
  });

  it('Test for DART 270 (darts list)', () => {
    /****************************   Test for DART 270 (darts list)       ***********************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART270-TemporaryFilesClean-up]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    //cy.get('[for="BrutusinForms#0_0"]', { timeout: 10000 }).should('exist');
    cy.get('[id="BrutusinForms#0_1"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_5"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');
    cy.wait(2000);
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART270-TemporaryFilesClean-up]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_1"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_5"]', { timeout: 4000 }).should('have.value', 'test');
  });
});
