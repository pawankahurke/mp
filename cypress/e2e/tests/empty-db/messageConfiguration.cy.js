import { login } from '../../../helpers/test-utils.js';
import 'cy-verify-downloads';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Message Configuration test (empty-db)', () => {
  it('Test for Message Configuration', () => {
    const time = String(new Date().getTime()).slice(4);
    const message = `newmessage${time}`;

    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/custom/messageAudit.php');
    cy.get('#explain_login').click();
    cy.get('#ExportAuditDetails').click({ force: true });
    cy.get('#datefrom', { timeout: 4000 }).clear().type('06/01/22', { force: true });
    cy.window()
      .document()
      .then(doc => {
        cy.get('#submitExport').click({ force: true });
        cy.verifyDownload('ExportMessageAudit.csv');
        doc.addEventListener('click', () => {
          setTimeout(function () {
            debugger;
            doc.location.reload();
          }, 5000);
        });
      });
    cy.get('#BackTab').click({ force: true });
    cy.get('#explain_login').click({ force: true });
    cy.get('#msg_add_configurations').click({ force: true });
    cy.get('#msgtitle').type(message);
    cy.get('#msgtext').type(message);
    cy.get('#msgURL').type('google.com');
    cy.get('#btntxt').type(message);
    cy.get('#snoozebtntxt').type(message);
    cy.get('#retrytime').type('3');
    cy.get('#retryfreq').type('2');
    cy.get('#msglife').type('4');
    cy.get('#addDeploymentSiteBtn').click({ force: true });

    cy.visit('/Dashboard/custom/messageAudit.php');
    cy.get('#explain_login').click({ force: true });
    cy.get('#BackTab').click({ force: true });
    cy.get('#msgconfig_grid > tbody > tr:last > td:nth-child(3)').should('have.text', message);
    cy.contains(message).click({ force: true });
    cy.get('#explain_login').click({ force: true });
    cy.get('#msg_edit_configurations').click({ force: true });
    cy.get('#editmsgURL').clear().type('google.com');
    cy.get('div.icon-circle').click({ force: true, multiple: true });
    cy.wait(2000);

    cy.visit('/Dashboard/custom/messageAudit.php');
    cy.get('#explain_login').click({ force: true });
    cy.get('#BackTab').click({ force: true });
    cy.get('#msgconfig_grid > tbody > tr:last > td:nth-child(4)').should('have.text', 'google.com');
    cy.get('#explain_login').click({ force: true });
    cy.get('#msg_audit_configurations').click({ force: true });

    cy.visit('/Dashboard/custom/messageAudit.php');
    cy.get('#explain_login').click({ force: true });
    cy.get('#BackTab').click({ force: true });
    cy.get('#msg_trigger_configurations').click({ force: true });

    cy.visit('/Dashboard/custom/messageAudit.php');
    cy.get('#explain_login').click({ force: true });
    cy.get('#BackTab').click({ force: true });
    cy.get('#msg_clear_configurations').click({ force: true });

    cy.visit('/Dashboard/custom/messageAudit.php');
    cy.get('#explain_login').click({ force: true });
    cy.get('#BackTab').click({ force: true });
    cy.contains(message).click({ force: true });
    cy.get('#msg_delete_configurations').click({ force: true });
    cy.contains(`Yes, delete it!`).click();
  });
});
