import { randomString, login } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', (err, runnable) => false);

function generate(count) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i <= count; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

describe('checkRole', () => {
  it('Check role', () => {
    //Open site
    cy.visit('/Dashboard');
    cy.get('#signUpLink').click();

    //generate email
    const newfirstname = `newfirst${generate(4)}`;
    const email = newfirstname + '@test-mail.com';

    //signup
    cy.get('[data-cy="newfirstname"]').type(newfirstname);
    cy.get('[data-cy="newLastName"]').type(newfirstname);
    cy.get('[data-cy="newuseremail"]').type(email);
    cy.get('[data-cy="createAccountSubmit"]').click();

    const password = 'TEST2020test';
    cy.get('.user-access-link').click();

    //add password
    cy.get('#passwordval').type(password);
    cy.get('#repassword').type(password);
    cy.get('#login-btn').click();
    cy.get("[data-qa='gotologinpage']").click();

    //login
    login(email, password);

    //checking access to the page

    cy.get('[data-cy="text-not-access-user"]', { timeout: 30000 }).should('exist');

    cy.visit('/Dashboard/notification/');
    cy.get('#pageName', { timeout: 15000 }).contains('Notification').should('not.exist');
    cy.visit('/Dashboard/Compliance/');
    cy.get('#pageName', { timeout: 15000 }).contains('Compliance').should('not.exist');
    cy.visit('/Dashboard/softdist_config/');
    cy.get('#pageName', { timeout: 15000 }).contains('Software Distribution Configuration').should('not.exist');
    cy.visit('/Dashboard/mum/');
    cy.get('#pageName', { timeout: 15000 }).contains('Patch Management').should('not.exist');
    cy.visit('/Dashboard/census/', { timeout: 30000 });
    cy.get('#pageName', { timeout: 15000 }).contains('Census').should('not.exist');
    cy.visit('/Dashboard/device/');
    cy.get('#pageName', { timeout: 15000 }).contains('Groups').should('not.exist');
    cy.visit('/Dashboard/profiles/');
    cy.get('#pageName', { timeout: 15000 }).contains('Profiles').should('not.exist');
    cy.visit('/Dashboard/adreset/');
    cy.get('#pageName', { timeout: 15000 }).contains('Active Directory').should('not.exist');
    cy.visit('/Dashboard/softdist/');
    cy.get('#pageName', { timeout: 15000 }).contains('Software Distribution').should('not.exist');
    cy.visit('/Dashboard/mum_config/');
    cy.get('#pageName', { timeout: 15000 }).contains('Patch Management Configure').should('not.exist');
    cy.visit('/Dashboard/role/');
    cy.get('#pageName', { timeout: 15000 }).contains('Access Right & Permissions').should('not.exist');
    cy.visit('/Dashboard/customer/');
    cy.get('#pageName', { timeout: 15000 }).contains('Users').should('not.exist');
    cy.visit('/Dashboard/sso/');
    cy.get('#pageName', { timeout: 15000 }).contains('Single sign-on Configuration').should('not.exist');
    cy.visit('/Dashboard/ticketingwizard/');
    cy.get('#pageName', { timeout: 15000 }).contains('Ticketing Wizard').should('not.exist');
    cy.visit('/Dashboard/site/');
    cy.get('#pageName', { timeout: 15000 }).contains('Site').should('not.exist');
    cy.visit('/Dashboard/autolog/');
    cy.get('#pageName', { timeout: 15000 }).contains('Automation Audit').should('not.exist');
    cy.visit('/Dashboard/watcher/');
    cy.get('#pageName', { timeout: 15000 }).contains('Alert Configuration').should('not.exist');
  });
});
