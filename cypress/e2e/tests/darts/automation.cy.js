import { login, dartsStatusCheck, darts } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('automation test (darts)', () => {
  it('Test for DART 418 (android config)', () => {
    cy.visit('/Dashboard');
    login();

    /***********************   Test for DART 418 (android config)    ****************************************/

    darts();

    cy.get('[data-qa=DART418-AlertPolicies]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('.brutusin-form textarea:first').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');
    //dartsStatusCheck();

    darts();

    cy.get('[data-qa=DART418-AlertPolicies]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('.brutusin-form textarea:first', { timeout: 4000 }).should('have.value', 'test');
  });

   it('Test for DART 413 (android config)', () => {
     /************************   Test for DART 413 (android config)       ***************************************/

     cy.visit('/Dashboard');
     login();
     darts();

     cy.get('[data-qa=DART413-AppLocker]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

  //   cy.get('[for="BrutusinForms#0_0"]', { timeout: 10000 }).should('exist');
     cy.get('[id="BrutusinForms#0_1"]').clear().type('test', { force: true });
     cy.get('[id="BrutusinForms#0_4"]').clear().type('test', { force: true });
     cy.get('[id="BrutusinForms#0_5"]').clear().type('test', { force: true });
     cy.get('[id="BrutusinForms#0_6"]').clear().type('test', { force: true });

     cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

     cy.get('#loader_submit').should('not.be.visible');

     cy.wait(3000)
     darts();

     cy.get('[data-qa=DART413-AppLocker]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

     cy.get('[id="BrutusinForms#0_1"]', { timeout: 4000 }).should('have.value', 'test')
     cy.get('[id="BrutusinForms#0_4"]', { timeout: 4000 }).should('have.value', 'test')
     cy.get('[id="BrutusinForms#0_5"]', { timeout: 4000 }).should('have.value', 'test')
     cy.get('[id="BrutusinForms#0_6"]', { timeout: 4000 }).should('have.value', 'test')

    });

   it('Test for DART 189 (darts list)', () => {
     /*******************   Test for DART 189 (darts list)       ********************************************/

     cy.visit('/Dashboard');
     login();
     darts();

     cy.contains(`Dart's List`).click();
     cy.wait(2000);

     cy.get('[data-qa=DART189-FileDownloadFiltering]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

  //   cy.wait(4000);

     cy.get('.brutusin-form textarea:first').clear().type('test', { force: true });

     cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

     cy.get('#loader_submit').should('not.be.visible');

     darts();

     cy.contains(`Dart's List`).click();

     cy.get('[data-qa=DART189-FileDownloadFiltering]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

     cy.get('.brutusin-form textarea:first', { timeout: 4000 }).should('have.value', 'test')

    });

   it('Test for DART 267 (darts list)', () => {
     /*****************************   Test for DART 267 (darts list)       **********************************/

     cy.visit('/Dashboard');
     login();
     darts();

     cy.contains(`Dart's List`).click();

     cy.get('[data-qa=DART267-LogFileRetrievalandLogging]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

     cy.get('[id="BrutusinForms#0_3"]').clear().type('test', { force: true });
     cy.get('[id="BrutusinForms#0_4"]').clear().type('default,*.txt', { force: true });

     cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

     cy.get('#loader_submit').should('not.be.visible'); 

     darts();
     cy.contains(`Dart's List`).click();

     cy.get('[data-qa=DART267-LogFileRetrievalandLogging]', { timeout: 10000 }).click({ force: true });

     cy.contains('button', 'Confirm', { timeout: 10000 }).click();

     cy.get('#object').should('not.be.empty');

     //cy.get('[id="BrutusinForms#0_3"]', { timeout: 4000 }).should('have.value', 'test');
     cy.get('[id="BrutusinForms#0_4"]', { timeout: 4000 }).should('have.value', 'default,*.txt');

    });

  //   /*********************          iOS Config         ******************************************/

  //   // cy.contains(`iOS Configuration`, { timeout: 2000 }).click();
  //   //cy.get('[data-qa=iosConfig]').wait(2000).click();

  //   // cy.get('#UserInput').type('Commands').type('{enter}');

  //   // cy.get('[data-qa=Commands]', { timeout: 6000 }).click({ force: true });

  //   // cy.get('button.swal2-cancel', { timeout: 2000 }).should('be.visible');
  //   // cy.contains('button', 'Confirm', { timeout: 10000 }).click();

  //   // cy.get('#object').should('not.be.empty');

  //   // cy.get(`a[data-qa=profiles]`, { timeout: 1000 }).click({ force: true });
  //   // cy.get('div.card-body').should('be.visible');

  //   // cy.contains('td', 'Default').dblclick();
  //   // //cy.contains(`Default`).wait(2000).dblclick()

  //   // cy.wait(1000);

  //   // cy.get('a[data-qa=passwordReset]').click({ force: true });
  //   // cy.get('div.card-body').should('be.visible');
  //   // cy.contains(`Configure Questions`).click()
  // });
});
