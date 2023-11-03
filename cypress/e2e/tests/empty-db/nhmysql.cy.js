import { login } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('nhmysql test (empty-db)', () => {
  it('nhmysql', () => {
    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/nhmysql/index.php');

    cy.get('#query-valu').should('be.visible');
    cy.get('#query-submit').should('be.visible');

    // Add new menu rows
    const q =
      "replace INTO core.UserDashboards (id, did, name, `type`, visualization, createdby, createdon, `global`, home) VALUES(951, NULL, 'Hardware Asset Inventory', 1, 0, 'admin', 1609831303, 1, 1)," +
      `
      (970, NULL, 'Digital Experience Overview', 1, 0, 'admin', 1609831303, 1, 1),
      (972, NULL, 'Productivity & Collaboration', 1, 0, 'admin', 1609831303, 1, 1),
      (973, NULL, 'Business Applications', 1, 0, 'admin', 1609831303, 1, 1),
      (974, NULL, 'Employee Feedback', 1, 0, 'admin', 1609831303, 1, 1),
      (980, NULL, 'Boot & LogOn Details', 1, 0, 'admin', 1609831303, 1, 1),
      (983, NULL, 'Employee Sentiment', 1, 0, 'admin', 1609831303, 1, 1),
      (984, NULL, 'End-User Productivity Optimization', 1, 0, 'admin', 1609831303, 1, 1),
      (985, NULL, 'Software Asset Inventory', 1, 0, 'admin', 1609831303, 1, 1),
      (988, NULL, 'List of Patches', 1, 0, 'admin', 1609831303, 1, 1),
      (990, NULL, 'Device Experience Score', 1, 0, 'admin', 1609831303, 1, 1),
      (992, NULL, 'Patch Management Overview', 1, 0, 'admin', 1609831303, 1, 1);`;
    cy.get('#query-valu').clear().type(q, { delay: 0 });
    cy.get('#query-submit').click();
    cy.get('[data-qa="QueryExecutedSuccessfully"]').should('exist');
    cy.get('[data-qa="QueryExecutedFailed"]').should('not.exist');

    const siteName = `TestQA_Testing`;
    const r = Math.floor(Math.random() * 10000);
    const now = Math.floor(new Date().getTime() / 1000);
    // Add machine
    const q2 =
      'INSERT IGNORE INTO core.Census\
      (id, site, host, uuid, born, `last`, code, deleted, revhost, censusuniq, censussiteuniq, cksum, updated, profgrp, lastsync, syncstate, syncblock, syncerr, os, subscrpid)' +
      `VALUES(
        null,  (select sitename from install.Sites limit 1), 'TJXL${r}', 'a6854c28-6cb4-43ad-b242-${r}',
        ${now}, ${now},0,	0,
             0,	'26c01d657dacc644f0f6b84a409ee69b', '23524dbc32954f63313ca742ee9cd24d', '',
             ${now},	'',	0,	0,	0,	0,	'Windows10EnterpriseEdition64-bit',	0),
             (
              null,  '${siteName}', 'DEV000CI003', 'a6854c28-6cb4-43ad-b242-${r}',
              ${now}, ${now},0,	0,
                   0,	'26c01d657dacc644f0f6b84a409ee69b', '23524dbc32954f63313ca742ee9cd24d', '',
                   ${now},	'',	0,	0,	0,	0,	'Windows10EnterpriseEdition64-bit',	0)`;
    cy.get('#query-valu').clear().type(q2, { delay: 0 });
    cy.get('#query-submit').click();
  });
});
