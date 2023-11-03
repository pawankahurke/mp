import { login } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Check export notification', () => {
  it('Check export', () => {
    cy.visit('/Dashboard/');
    login();
    cy.visit('/Dashboard/watcher/');
    cy.get('#forAlert').click();
    cy.get('#export-alert').click();
    cy.get('[data-id=alertexportsite]').click();
    cy.get('#exportNotify').contains('All').click();
    cy.get('#notifyConfig').click();
    cy.window()
      .document()
      .then(doc => {
        cy.get('#exportNotify').contains('Export Notifications').click();

        cy.verifyDownload('Notification.csv');
        doc.addEventListener('click', () => {
          setTimeout(function () {
            debugger;
            doc.location.reload();
          }, 5000);
        });
      });
  });
});
