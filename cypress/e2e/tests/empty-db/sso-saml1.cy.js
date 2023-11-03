import { login, singleSignOn } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

/**
 * URL: https://dev-41204599-admin.okta.com/admin/app/generic-saml/instance/0oa4o689j6yeM4d8T5d7#tab-signon
 * Login: levhav@yandex.ru
 * Password: Tmhe2020
 * Additional docs here in folder `docs/sso.md`
 */
describe('sso SAML (empty-db)', () => {
  it('singleSignOn set config', () => {
    cy.visit('/Dashboard');
    login();
    singleSignOn();
    cy.get('[data-qa="sso-switch-btn"]').should('exist');
    cy.get('#absoLoader').should('exist');
    cy.wait(1000);
    cy.get('#absoLoader').should('not.be.visible');

    cy.get('body').then(body => {
      const saml_company_name = body.find('#saml_company_name')[0];
      if (saml_company_name && saml_company_name.value.length == 0) {
        cy.get('#ssoVal').parent().click();
      }

      cy.get('#sso-saml').click();
      cy.get('#saml_company_name').clear().type('exk2vqve5n7h0VTAP5d7');
      cy.get('#saml_idp_name').clear().type('exk2vqve5n7h0VTAP5d7');
      cy.get('#saml_idp_metadata_url').clear().type('https://dev-41204599.okta.com/app/exk4o689j5IOPn4Oi5d7/sso/saml/metadata');
      cy.get('#saml_get_metadata').click();
      cy.get('#saml_idp_metadata').should('not.have.value', '');
      cy.get('#saml_sp_entity_id').clear().type('exk2vqve5n7h0VTAP5d7');
      cy.get('#saml_verify_btn').click();

      cy.get('#saml_save_btn').click();
    });
  });
});
