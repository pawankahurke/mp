import { login } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('checkUsers', () => {
  it('Check Users', () => {
    const time = String(new Date().getTime()).slice(4);
    const email = `anewuser${time}@nanoheal.com`;

    cy.visit('/Dashboard');
    login();
    cy.visit('/Dashboard/customer/');
    cy.get('[data-qa=settingsUsers]').click();
    cy.get('[data-qa=Add-New-User]').click();
    cy.get('[data-qa=advusername]').type(
      `F` +
        Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, '')
          .substr(0, 8),
    );
    cy.get(`[data-qa=last_name]`).type(`LastA${time}`);
    cy.get(`[data-qa=advuser_email]`).type(email);
    cy.get('[data-qa=add_Customers]').click().find('span.text', { timeout: 5000 }).first().click();
    cy.get('[data-qa=advusername]').click();
    cy.get('[data-qa=add_advroleId]').click().find('span.text', { timeout: 5000 }).last().click();
    cy.get('[data-qa=advusername]').click();
    cy.get('[data-qa=add_timeZone]').click().find('span.text', { timeout: 5000 }).first().click();
    cy.get('[data-qa=advusername]').click();
    cy.get('[data-qa=add_sectype]').click().find('span.text', { timeout: 5000 }).first().click();
    cy.get('#addAdvUser').click();
    cy.visit('/Dashboard/customer/');

    // search the user in the list
    cy.get('#loader').should('not.be.visible');
    cy.get('#notifSearch').type(`anewuser${time}{enter}`);
    cy.get('#loader').should('not.be.visible');

    // delete the user
    cy.contains(email, { timeout: 12000 }).click({ force: true });
    cy.get('[data-qa=settingsUsers]').click();
    cy.get('[data-qa=Delete-User]').click();
    cy.contains('button', 'Yes, delete it!').click();
  });
});
