import { login } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', (err, runnable) => false);

const optionName = ['Management', 'Agent_Workspace', 'Deployments'];

const enableOption = name => {
  cy.get(`[data-qa=${name}]`).find('button.btn').click();
  cy.get(`[data-qa=${name}]`).find('span.text').last().click();
};

describe('checkRole', () => {
  it('Check role', () => {
    const testRole = `TR${new Date().getTime()}`;
    cy.visit('/Dashboard');
    login();
    cy.get('#pageName', { timeout: 15000 }).should('exist').contains('Home Page');

    cy.visit('/Dashboard/role/');
    cy.get('[data-qa=settingsRole]').click();
    cy.get('[data-qa=addRole]').click();
    cy.get('[data-qa=roleNameInput]').type(testRole);

    optionName.map(e => enableOption(e));

    cy.get('[data-qa=saveRole]').click();
  });
});
