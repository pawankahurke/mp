Cypress.on('uncaught:exception', (err, runnable) => false);

describe('sso SAML test auth (empty-db)', () => {
  it('singleSignOn set config', () => {
    cy.visit('/Dashboard');
    cy.wait(2000);
    cy.get('#ssoauthbtn', { timeout: 10000 }).click({ force: true });
    cy.get('[autocomplete="identifier"]', { timeout: 4000 }).type('levhav@yandex.ru');
    cy.get('[autocomplete="current-password"]').type('Tmhe2020');
    cy.get('#signin-container [type="submit"]').click();

    cy.get(`[data-qa="loginForm"]`).should(`not.exist`);
    cy.wait(5000);
    cy.visit('/Dashboard/home/');
  });
});
