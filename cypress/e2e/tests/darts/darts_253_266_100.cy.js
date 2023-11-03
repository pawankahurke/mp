import { login, dartsStatusCheck, darts } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('automation test (darts_253_266_100)', () => {
  it('Test for DART 253 (darts list)', () => {
    /*******************   Test for DART 253 (darts list)       ********************************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();
    cy.wait(2000);

    cy.get('[data-qa=DART253-CustomercontactInformation]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

 //   cy.wait(4000);

    //cy.get('[for="BrutusinForms#0_0"]', { timeout: 10000 }).should('exist');
    cy.get('[id="BrutusinForms#0_17"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_19"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_20"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_23"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_24"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_25"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_26"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_27"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_28"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_29"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_30"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_31"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_32"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_33"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_34"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_35"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_36"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_37"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_39"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_41"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_43"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_45"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_47"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_49"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_51"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_53"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_55"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_57"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_58"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_60"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_61"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_63"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_64"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_66"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_67"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_69"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_70"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_71"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_72"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');
    cy.wait(3000);

    darts();
    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART253-CustomercontactInformation]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    //cy.get('[id="BrutusinForms#0_17"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_19"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_20"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_23"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_24"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_25"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_26"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_27"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_28"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_29"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_30"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_31"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_32"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_33"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_34"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_35"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_36"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_37"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_39"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_41"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_43"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_45"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_47"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_49"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_51"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_53"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_55"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_57"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_58"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_60"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_61"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_63"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_64"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_66"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_67"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_69"]', { timeout: 4000 }).should('have.value', 'test')
    cy.get('[id="BrutusinForms#0_70"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_71"]', { timeout: 4000 }).should('have.value', 'test')
    //cy.get('[id="BrutusinForms#0_72"]', { timeout: 4000 }).should('have.value', 'test')

   });

   it('Test for DART 100 (darts list)', () => {
    /*******************   Test for DART 100 (darts list)       ********************************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();
    cy.wait(2000);

    cy.get('[data-qa=DART100-FileDistributionandRetrieval]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

 //   cy.wait(4000);

    cy.get('[id="BrutusinForms#0_3"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_6"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_9"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_10"]').clear().type('3', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');


    cy.wait(3000);
    darts();
    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART100-FileDistributionandRetrieval]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_3"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_6"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_9"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_10"]', { timeout: 4000 }).should('have.value', '3');
  });

  it('Test for DART 266 (darts list)', () => {
    /*******************   Test for DART 266 (darts list)       ********************************************/

    cy.visit('/Dashboard');
    login();
    darts();

    cy.contains(`Dart's List`).click();
    cy.wait(2000);

    cy.get('[data-qa=DART266-NodeServerCommunication]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

 //   cy.wait(4000);

    cy.get('[id="BrutusinForms#0_2"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_4"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_5"]').clear().type('test', { force: true });
    cy.get('[id="BrutusinForms#0_6"]').clear().type('test', { force: true });

    cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

    cy.get('#loader_submit').should('not.be.visible');


    cy.wait(3000);
    darts();
    cy.contains(`Dart's List`).click();

    cy.get('[data-qa=DART266-NodeServerCommunication]', { timeout: 10000 }).click({ force: true });

    cy.contains('button', 'Confirm', { timeout: 10000 }).click();

    cy.get('#object').should('not.be.empty');

    cy.get('[id="BrutusinForms#0_2"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_4"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_5"]', { timeout: 4000 }).should('have.value', 'test');
    cy.get('[id="BrutusinForms#0_6"]', { timeout: 4000 }).should('have.value', 'test');
  });
});
