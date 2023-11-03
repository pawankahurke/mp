import { login, nanohealUpdate } from '../../../helpers/test-utils.js';
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('core.dbn upload test (empty-db)', () => {
  it('Test for core.dbn upload', () => {
    const coreDBN = 'tests/core.dbn';

    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/softwareupdate/');

    cy.get('#forNanohealClient', { timeout: 100000 }).should('be.visible').click({ force: true });

    cy.contains('Core DB Upload', { timeout: 100000 }).click({ force: true });

    // Content-Type: application/octet-stream

    cy.get('#core-file').selectFile(coreDBN, { force: true, mimeType: 'application/octet-stream' });

    cy.get('#btn-uploadCoreDB').click({ force: true });

    cy.get('#core-dbn-ldr', { timeout: 100000 }).should('not.visible', { timeout: 100000 });
    cy.get('.av-import-w', { timeout: 100000 }).should('be.visible', { timeout: 100000 });

    cy.get('body').then(body => {
      debugger;
      if (body.find('[data-qa="import-dbn-one-way"]').length > 0) {
        cy.get('[data-qa="import-dbn-one-way"]').click({ force: true });
      }
    });

    // cy.visit('/Dashboard/auditlog/');
    // cy.get(`#auditlog_datatable`).should('be.visible');
    // cy.get('#auditlog_datatable tr td [title="CoreDb upload"]', { timeout: 100000 }).contains('CoreDb upload');
  });
});
