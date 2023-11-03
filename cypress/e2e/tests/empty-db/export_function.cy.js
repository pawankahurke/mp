import { login, softdistСonfig, census, device, alertConfiguration, users } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('export buttons test (empty-db)', () => {
  /******************************** For softdistСonfig page *************************************/

  it('test for Export Button on softdistСonfig page', () => {
    cy.visit('/Dashboard');
    login();

    softdistСonfig();

    cy.contains('td', 'windows').click();

    cy.get('#forSwDis').click();

    cy.contains('Export Status', { timeout: 4000 }).click();

    cy.window()
      .document()
      .then(doc => {
        cy.get('#btn-exportAuditConfig').click({ force: true });
        cy.verifyDownload('_PackageDetails.xls');
        doc.addEventListener('click', () => {
          setTimeout(function () {
            debugger;
            doc.location.reload();
          }, 5000);
        });
      });
  });

  /************************************* For device page **************************************/

  // it('test for Export Button on device page', () => {
  //
  // cy.visit('/Dashboard');
  // login();
  //
  // device();
  //
  // cy.get('td:first').click();
  //
  // cy.get('[data-qa=groupSetting_menu]', { timeout: 4000 }).click();
  //
  // cy.get('#export_group_list', { timeout: 4000 }).click();
  //
  // // cy.get('[data-qa=groupSetting_menu]', { timeout: 4000 }).click();
  //
  // cy.window().document().then((doc) => {
  //   cy.get('#export_group_listmain', { timeout: 4000 }).click();
  //   cy.verifyDownload('GroupDetails.xlsx');
  //   doc.addEventListener('click', () => {
  //     setTimeout(function () {
  //       doc.location.reload()
  //     }, 5000)
  //   });
  // });
  // });

  /******************************** For users page *******************************/

  it('test for Export Button on users page', () => {
    cy.visit('/Dashboard');
    login();

    users();

    cy.contains('td', 'Admin').click({ force: true });

    cy.get('[data-qa=settingsUsers]', { timeout: 4000 }).click({ force: true });

    cy.window()
      .document()
      .then(doc => {
        cy.get('#export_user', { timeout: 4000 }).click({ force: true });
        cy.verifyDownload('Users.xls');
        doc.addEventListener('click', () => {
          setTimeout(function () {
            debugger;
            doc.location.reload();
          }, 5000);
        });
      });
  });

  /************************************ For auditlog *************************/

  it('test for Export Button on auditlog page', () => {
    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/auditlog/');
    cy.get(`#auditlog_datatable`).should('be.visible');

    cy.get('#forUserActivity', { timeout: 4000 }).click({ force: true });

    cy.get('#export_audit', { timeout: 4000 }).click({ force: true });

    cy.get('#datefrom', { timeout: 4000 }).clear().type('06/01/22', { force: true });

    cy.window()
      .document()
      .then(doc => {
        cy.get('#btn-exportAuditLogData').click({ force: true });
        cy.verifyDownload('AuditLog.xls');
        doc.addEventListener('click', () => {
          setTimeout(function () {
            debugger;
            doc.location.reload();
          }, 5000);
        });
      });
  });

  /*********************************** For audit *********************************/

  it('test for Export Button on audit page', () => {
    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/audit/');
    cy.get(`#auditTable`).should('be.visible');

    cy.get('#forDartAudit', { timeout: 4000 }).click({ force: true });

    cy.get('#exportDartAudit', { timeout: 4000 }).click({ force: true });

    cy.get('#datefrom', { timeout: 4000 }).clear().type('06/01/22', { force: true });

    cy.window()
      .document()
      .then(doc => {
        cy.get('#btn-exportDartAudit').click({ force: true });
        cy.verifyDownload('Audit.xls');
        doc.addEventListener('click', () => {
          setTimeout(function () {
            debugger;
            doc.location.reload();
          }, 5000);
        });
      });
  });

  /******************************* For autolog **********************************/

  it('test for Export Button on autolog page', () => {
    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/autolog/');
    cy.get(`#auditlog_datatable`).should('be.visible');

    cy.get('#forAutoAudit', { timeout: 4000 }).click({ force: true });

    cy.get('#export_audit', { timeout: 4000 }).click({ force: true });

    cy.get('#datefrom', { timeout: 4000 }).clear({ force: true }).type('06/01/22', { force: true });

    cy.window()
      .document()
      .then(doc => {
        cy.get('#btn-exportAutomationAuditData').click({ force: true });
        cy.verifyDownload('Notification_Log.xls');
        doc.addEventListener('click', () => {
          setTimeout(function () {
            debugger;
            doc.location.reload();
          }, 5000);
        });
      });
  });

  /********************************** For loginaudit ********************************/

  it('test for Export Button on loginaudit page', () => {
    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/loginaudit/');

    cy.get('#forLoginInfo', { timeout: 4000 }).click({ force: true });

    cy.get('#export_login', { timeout: 4000 }).click({ force: true });

    cy.get('#datefrom', { timeout: 4000 }).clear().type('06/01/22', { force: true });

    cy.window()
      .document()
      .then(doc => {
        cy.get('#btn-exportLoginAudit').click({ force: true });
        cy.verifyDownload('logRangeDetails.xlsx');
        doc.addEventListener('click', () => {
          setTimeout(function () {
            debugger;
            doc.location.reload();
          }, 5000);
        });
      });
  });
});
