import { login, alertConfiguration } from '../../../helpers/test-utils.js';
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('import notification button test (empty-db)', () => {
  it('test for import Button on watcher page', () => {
    const Notification = 'Notification.csv';

    cy.visit('/Dashboard');
    login();
    alertConfiguration();

    cy.get('#forAlert').click({ force: true });
    cy.get('#import-alert').click({ force: true });

    cy.get('#notify_file1').attachFile({ filePath: Notification, encoding: 'utf-8' }); // @todo use cy.get('#notify_file1').selectFile()
    cy.get('#import-alert1').click({ force: true });
  });
});
