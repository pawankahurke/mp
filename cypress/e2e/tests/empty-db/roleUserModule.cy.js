import { login, logOut, users, accessRight, sites } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Role Module test (empty-db)', () => {
  it('Test for Role Module', () => {
    cy.visit('/Dashboard');
    login();

    accessRight();

    const optionName = ['Management', 'Agent_Workspace', 'Dashboard', 'Deployments'];

    const enableOption = name => {
      cy.get(`[data-qa=${name}]`).find('button.btn').click();
      cy.get(`[data-qa=${name}]`).find('span.text').last().click();
    };

    const time = String(new Date().getTime()).slice(4);
    const role = `testRole${time}`;
    cy.get(`[data-qa=settingsRole]`).click();
    cy.get(`[data-qa=addRole]`).click();
    cy.get(`[data-qa=roleNameInput]`).type(role);
    cy.contains(`Agent_Workspace`).click();
    optionName.map(e => enableOption(e));
    cy.get(`[data-qa=saveRole]`).click();
    cy.wait(5000);

    logOut();

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var length = 4;
    var randomstring = '';
    for (var i = 0; i < length; i++) {
      var rnum = Math.floor(Math.random() * characters.length);
      randomstring += characters.substring(rnum, rnum + 1);
    }

    const name = `testuser${randomstring.toLowerCase()}`;
    const email = `${name}@nanoheal.com`;

    cy.get('#signUpLink').click();

    cy.get(`[data-cy=newfirstname]`).type(name);
    cy.get(`[data-cy=newLastName]`).type(name);
    cy.get(`[data-cy=newuseremail]`).type(email);
    cy.get(`[data-cy=createAccountSubmit]`).click();
    cy.get(`[class=user-access-link]`).click();
    cy.get('#passwordval').type(`Test@123`);
    cy.get('#repassword').type(`Test@123`);
    cy.get('#login-btn').click();
    cy.get(`[data-qa=gotologinpage]`).click();

    cy.visit('/Dashboard');
    login();
    users();
    cy.wait(500);
    cy.get('#notifyDtl_lengthSel').select('100');
    cy.contains(email).dblclick({ force: true });
    cy.wait(500);
    cy.get('#editOption').click();
    cy.get('[data-qa=edit_Sites]').click().find('span.text', { timeout: 1000 }).first().click({ force: true });
    cy.get('[data-qa=edit_Sites]').click();
    cy.get('[data-qa=edit_advroleId]').click().find('span.text', { timeout: 1000 }).last().click({ force: true });
    cy.get('[data-qa=edit_timeZone]').click().find('span.text', { timeout: 1000 }).first().click({ force: true });
    cy.get('[data-qa=edit_sectype]').click().find('span.text', { timeout: 1000 }).last().click({ force: true });
    cy.get('#updateAdvUser').click();
    cy.wait(500);

    logOut();

    cy.get('#email').type(email);
    cy.get('#password').type('Test@123');
    cy.get('#loginSubmitId').click();
    cy.url().should('include', 'home');
  });
});
