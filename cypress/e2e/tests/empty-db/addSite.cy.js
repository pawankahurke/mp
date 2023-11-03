import { login, logOut } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Add new site test (empty-db)', () => {
  it('Test for site page', () => {
    const time = String(new Date().getTime()).slice(4);
    const sitename = `newSite${time}`;

    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/site/');

    cy.get('#forSite').click();
    cy.get('[data-qa="Add-New-Site"]').click();

    cy.get('#deploy_sitename').type(sitename);
    cy.get('#client32_name').type(sitename);
    cy.get('#client64_name').type(sitename);
    cy.get('#branding_url').type(sitename);

    cy.get('#addDeploymentSiteBtn').click({ force: true });
    cy.wait(2000);

    cy.visit('/Dashboard/home/');

    cy.get('#dropdownMenuButton').click({ force: true });
    cy.get('#TestCI').click({ force: true });
    cy.get('#save_rightMenu').click({ force: true });

    logOut();

    login();

    cy.visit('/Dashboard/site/');
    cy.get('#notifyDtl_lengthSel').select('100');
    cy.contains('newSite').click({ force: true });
    cy.get('#forSite').click();
    cy.get('#site-license').click();
    cy.wait(1500);
    cy.get('#downloadUrl').should('contain.value', '.nanoheal.work/Dashboard/');
    cy.get('#copy_link1').click();
    cy.get('[data-notify="message"]').should('be.visible');
  });
});
