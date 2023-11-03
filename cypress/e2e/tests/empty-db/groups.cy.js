import { device, login } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('checkGroups', () => {
  it('Check Groups', () => {
    const testGroup = `testGroup_${new Date().getTime()}`;
    cy.visit('/Dashboard/');
    login();

    const time = String(new Date().getTime()).slice(4);
    const email = `groups${time}@nanoheal.com`;
    cy.visit('/Dashboard/customer/');
    cy.get('[data-qa=settingsUsers]').click();
    cy.get('[data-qa=Add-New-User]').click();
    cy.get('[data-qa=advusername]').type(`First${time}`);
    cy.get(`[data-qa=last_name]`).type(`Last${time}`);
    cy.get(`[data-qa=advuser_email]`).type(email);
    cy.get('[data-qa=add_Customers]').click().find('span.text', { timeout: 100000 }).first().click();
    cy.get('[data-qa=advusername]').click();
    cy.get('[data-qa=add_advroleId]').click().find('span.text', { timeout: 100000 }).last().click();
    cy.get('[data-qa=advusername]').click();
    cy.get('[data-qa=add_timeZone]').click().find('span.text', { timeout: 100000 }).first().click();
    cy.get('[data-qa=advusername]').click();
    cy.get('[data-qa=add_sectype]').click().find('span.text', { timeout: 100000 }).first().click();
    cy.get('#addAdvUser').click();
    cy.wait(1000);

    device();
    cy.get('#forGroups').click(); // @todo replace later [data-qa=groupSetting_menu]
    cy.get('#newGroupAddition').click();
    cy.get('[data-qa=formCheckDynamic]').click();
    cy.get('[data-qa=checkGroupNameDynamic]').type(testGroup);

    cy.get('[data-qa=selectTSitesDynamic]').click();
    cy.get('[data-qa=selectTSitesDynamic]').find('span.text', { timeout: 100000 }).first().click();
    cy.get('[data-qa=formCheckDynamic]').click();
    cy.get('[data-qa=selectTUsersDynamic]').click();
    cy.get('[data-qa=selectTUsersDynamic]').find('span.text', { timeout: 100000 }).first().click();

    cy.get('[data-qa=formCheckDynamic]').click();
    // cy.get('[data-qa=censusFilter]').click();
    cy.get('[data-qa=censusFilterForm]').type('test');

    cy.get('[data-qa=saveBtn]').click();

    cy.visit('/Dashboard/device/');

    cy.contains('p', testGroup, { timeout: 6000 }).click();
    cy.get('[data-qa=groupSetting_menu]').click();
    cy.get('[data-qa=deleteGroup]').click();
    cy.contains('button', 'Yes, delete it!', { timeout: 100000 }).click();

    cy.visit('/Dashboard/customer/');
    // search the user in the list
    cy.get('#loader').should('not.be.visible');
    cy.get('#notifSearch').type(`groups${time}{enter}`);
    cy.get('#loader').should('not.be.visible');

    // cy.contains(email, { timeout: 6000 }).click({ force: true });
    // cy.get('[data-qa=settingsUsers]').click();
    // cy.get('[data-qa=Delete-User]').click();
    // cy.contains('button', 'Yes, delete it!').click();
  });
});
