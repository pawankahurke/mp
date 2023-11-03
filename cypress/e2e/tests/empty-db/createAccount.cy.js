Cypress.on('uncaught:exception', (err, runnable) => false);
import { login } from '../../../helpers/test-utils';

describe('createAccount', () => {
  it('Create account', () => {
    const time = String(new Date().getTime()).slice(4);
    const email = `newuser${time}@nanoheal.com`;
    cy.visit('/Dashboard/userSignUp.php');
    cy.get(`[data-cy=newfirstname]`).type(`Firstname${time}`);

    cy.get(`[data-cy=newLastName]`).type(`LastName${time}`);
    cy.get(`[data-cy=newuseremail]`).type(email);
    cy.get(`[data-cy=createAccountSubmit]`).click();

    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/nhmysql/index.php');
    const q = `update core.Users set userStatus = '1', loginStatus = '0', passwordDate = ${Math.floor(
      new Date().getTime() / 1000 + 3600,
    )}, password = '$2y$10$xeFtIGip8OUi2zHUkKbxp.PciHjd/92yp.tV75po0V97D4PaxdYTu'  where user_email = '${email}'`;
    cy.get('#query-valu').type(q);
    cy.get('#query-submit').click();
    cy.wait(1000);
    cy.visit('/Dashboard');
    login(email);
  });
});
