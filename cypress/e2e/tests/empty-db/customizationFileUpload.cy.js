Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Test for file upload on customization page', () => {
  it('customization page file upload', () => {

    const UploadFile = 'cypress/fixtures/imageForTest.jpg';

    cy.visit('/visualization/');
    
    const login = async (email, password) => {
    cy.get('[data-cy=login]').type(email || Cypress.env('ACCAUNT_LOGIN'));
    cy.get('[data-cy=password]').type(password || Cypress.env('ACCAUNT_PASSWORD'));
    cy.get('[data-cy=loginSubmitId]').click();
    };

    login();

    cy.wait(2000);

    cy.visit('/visualization/#/customization/login-page');

    cy.get('input[type=file]').eq(0).selectFile(UploadFile, { force: true });

    cy.get('.ant-message-notice-content', { timeout: 10000 }).should('be.visible', { timeout: 10000 });

    cy.get('[aria-label=eye]').click({ force: true })
  });
});