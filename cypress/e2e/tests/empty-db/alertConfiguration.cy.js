import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('alertconfiguration test (empty-db)', () => {
  it('alertconfiguration', () => {
    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/nhmysql/index.php');

    cy.get('#query-valu').should('be.visible');
    cy.get('#query-submit').should('be.visible');

    const q =
      "INSERT INTO event.Console (ntype, priority, name, username, site, machine, nid, this_run, activeStatus, status) VALUES (5, 1, 'SCCM Corrupted', 'admin', 'Dyson_prod', 'AUCCD001187', 1, 1647462300, 1, 4);";
    cy.get('#query-valu').clear().type(q);
    cy.get('#query-submit').click();
    cy.get('[data-qa="QueryExecutedSuccessfully"]').should('exist');
    cy.get('[data-qa="QueryExecutedFailed"]').should('not.exist');

    const n1 =
      "INSERT INTO event.Notifications (global, ntype, priority, name, username, days, solo, console, email, seconds, threshold, last_run, next_run, this_run, group_include, enabled, created, modified) VALUES (0, 5, 1, 'SCCM Corrupted', 'admin', 0, 0, 1, 1, 60, 0, 0, 0, 0, 'All', 1, 1647328181, 1647407382);";
    cy.get('#query-valu').clear().type(n1);
    cy.get('#query-submit').click();

    const n2 =
      "INSERT INTO event.Notifications (global, ntype, priority, name, username, days, solo, console, email, seconds, threshold, last_run, next_run, this_run, group_include, enabled, created, modified) VALUES (0, 5, 1, 'SCCM Corruption Fixed', 'admin', 0, 0, 1, 1, 60, 0, 0, 0, 0, 'All', 1, 1647328321, 1647406362);";
    cy.get('#query-valu').clear().type(n2);
    cy.get('#query-submit').click();

    cy.visit('/Dashboard/home/');

    cy.get('a[data-qa=alertConfiguration]').click({ force: true });
    cy.get('div.card-body').should('be.visible');

    cy.get('[data-qa=tableAlerConf]').dblclick();
  });
});
