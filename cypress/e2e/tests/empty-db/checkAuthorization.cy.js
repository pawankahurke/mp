import { logOut } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('authorization test (empty-db)', () => {
  it('authorization test', () => {
    cy.visit('/Dashboard');
    cy.get('#signUpLink').click();

    const firstname = `newfirst${new Date().getTime()}`;
    const email = firstname + '@testmail.com';

    const login = async (email, password) => {
        cy.get('#email').clear();
        cy.get('#email').type(email);
        cy.get('#password').clear();
        cy.get('#password').type(password);
        cy.get('#loginSubmitId').click();
      };

    //signup
    cy.get('[data-cy="newfirstname"]').type(firstname);
    cy.get('[data-cy="newLastName"]').type(firstname);
    cy.get('[data-cy="newuseremail"]').type(email);
    cy.get('[data-cy="createAccountSubmit"]').click('');

    const password = 'Passwordtest123';
    const wrongpassword = 'Passwordtest1234';

    cy.get('.user-access-link').click();

    cy.get('#passwordval').type(password);
    cy.get('#repassword').type(password);
    cy.get('#login-btn').click();
    cy.get("[data-qa='gotologinpage']").click();

    login(email, wrongpassword);
    login(email, wrongpassword);
    login(email, wrongpassword);

    login(email, password);

    logOut();

    login(email, wrongpassword);
    login(email, wrongpassword);
    login(email, wrongpassword);
    login(email, wrongpassword);
    login(email, wrongpassword);

    login(email, password);

  cy.contains('label', 'Account is locked, Please click on forgot/reset password to unlock your account.', { timeout: 10000 });
});
});
