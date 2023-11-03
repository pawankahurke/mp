import { login, softwareDistribution, patchManagementConfig } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('notification test (empty-db)', () => {
    it('notification', () => {
      cy.visit('/Dashboard');
      login();

      cy.get('a[data-qa=patchManagementConfig]').click({ force: true });
  cy.get('div.card-body').should('be.visible');

  cy.get('#showConfigurationsTable').should('not.be.empty');

  cy.get('a[data-qa=softwareDistribution]').click({ force: true });
  cy.get('div.card-body').should('be.visible');

  cy.visit('/Dashboard/nhmysql/index.php');

      cy.get('#query-valu').should('be.visible');
    cy.get('#query-submit').should('be.visible');


    const q =
    "INSERT INTO softinst.Packages (appId, platform, type, sourceType, packageDesc, path, config3264type, packageName, version, access, status, global, owner, distrubute, user, lastModified, isConfigured, preinstall, oninstall, postdownload, ftpcdnURL) VALUES ('0', 'windows', 'file', '3', 'Install Adobe', 'Adobe DC', 'different', 'Adobe DC', 'DC', 'Anony', 'Initiated', 'yes', 'admin@nanoheal.com', 1, 'admin', '1615301117',  'No', 'NA', 'NA', 'NA', 'NA');";
    ;
    cy.get('#query-valu').clear().type(q);
    cy.get('#query-submit').click();
    cy.get('[data-qa="QueryExecutedSuccessfully"]').should('exist');
    cy.get('[data-qa="QueryExecutedFailed"]').should('not.exist');

    cy.visit('/Dashboard/softdist/');

    cy.get('#packageGrid').should('not.be.empty');

    });
});