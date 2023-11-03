import { login, dartsStatusCheck, darts } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('automation test (darts_306_288_190)', () => {
  it('Test for DART 306 (darts list)', () => {
    cy.visit('/Dashboard');
    login();

    /**************************   Test for DART 306 (darts list)       *************************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART306-Servicelogmanagement]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_3"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');

    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART306-Servicelogmanagement]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_3"]', { timeout: 4000 }).should('have.value', 'test');
  });

  it('Test for DART 288 (darts list)', () => {
    /****************************   Test for DART 288 (darts list)       ***********************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART288-SoftwarePatch]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_13"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_14"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');

    cy.wait(2000);
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART288-SoftwarePatch]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_13"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_14"]', { timeout: 4000 }).should('have.value', 'test');
  });

  it('Test for DART 190 (darts list)', () => {
    /**************************   Test for DART 190 (darts list)       *************************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART190-NanohealasService]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('.brutusin-form textarea:first').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_3"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_4"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');

    darts();

    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART190-NanohealasService]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('.brutusin-form textarea:first', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_3"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_4"]', { timeout: 4000 }).should('have.value', 'test');
  });
});
