import { login, randomString, darts, census, alertConfiguration } from '../../../helpers/test-utils.js';
import { sendRawEvent, dart308_PersonalAnalytics, userAgents } from '../../../helpers/client-events.js';
import { createNewSite, addDeviceToSite } from '../../../helpers/site-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

const siteName = `TestCI`;
const MachineName = `DEV000CI-${randomString(4)}`;
const uuid = `C1CD0000-C1CD-${randomString(4)}-${randomString(4)}-000000111111`;
const alertName = `${siteName}-${randomString(4)}`;

describe('reportEventsApi', () => {
  it('reportEventsApi::dart308TernOn', () => {
    cy.visit('/Dashboard');
    login();

    createNewSite(siteName);
    addDeviceToSite(siteName, MachineName, uuid);

    // add-alert
    const event2 = dart308_PersonalAnalytics(siteName, MachineName, uuid, 13);
    sendRawEvent(event2, 1);

    // Go to census page
    census();

    // Check that device is here
    cy.contains(MachineName).should('exist');
    cy.contains(userAgents[0]).should('exist');

    dart308TernOn();
  });

  // it('reportEventsApi::notification', () => {
  //   cy.visit('/Dashboard');
  //   login();

  //   const procduration = 24;
  //   const alertName = `${siteName}-${randomString(4)}`;
  //   createNew308Alert(alertName, procduration);

  //   // add-alert
  //   const event3 = dart308_PersonalAnalytics(siteName, MachineName, uuid, procduration);
  //   sendRawEvent(event3, 6);

  //   cy.wait(2000);
  //   cy.visit('/Dashboard/notification/');

  //   cy.contains(alertName).click();
  //   cy.get('#absoLoader').should('not.be.visible');
  //   cy.contains(MachineName).click();
  // });

  it('reportEventsApi::Complex_notification', () => {
    cy.visit('/Dashboard');
    login();

    const procduration = 24;
    createNewComplex308Alert(alertName, procduration);

    // add-alert
    const event3 = dart308_PersonalAnalytics(siteName, MachineName, uuid, procduration);
    sendRawEvent(event3, 6);

    cy.wait(2000);
    cy.visit('/Dashboard/notification/');

    cy.contains(`${alertName}AlertTest`).click();
    cy.get('#absoLoader').should('not.be.visible');
    cy.contains(MachineName).click();

    // Check Detail tab https://nanoheal.atlassian.net/browse/NCP-830
    cy.get('[name="checkNoc"]', { force: true }).first({ force: true }).click({ force: true });
    cy.get(`[data-qa="notification-getdetails-btn"]`).click({ force: true });

    cy.get(`[data-qa="get_notificationsEvents_showMoreDetails"]`).first().click({ force: true });
    cy.get(`[data-qa="Notification-Event-Details-tabHeader"]`).should('be.visible');
    cy.get(`#DartNumber`).contains('308').should('be.visible');
    cy.get(`[data-qa="Notification-Event-Details-close"]`).click({ force: true });
    cy.get(`[data-qa="Notification-Details-tabHeader"]`).should('be.visible');
    cy.get(`[data-qa="close-tab-NotificationDetails"]`).click({ force: true });
    cy.get(`[data-qa="close-tab-NotificationDetails"]`).click({ force: true });

    // showNearbyEvents
    // https://nanoheal.atlassian.net/browse/NCP-845
    cy.get(`[data-qa="notification-getdetails-btn"]`).click({ force: true });
    cy.get(`[data-qa="get_notificationsEvents_showNearbyEvents"]`).first().click({ force: true });
    // cy.get('[data-qa="showNearbyEvents_showMoreDetails"]', { force: true }).first({ force: true }).click({ force: true });
    // cy.get(`[data-qa="Notification-Event-Details-tabHeader"]`).should('be.visible');
    // cy.get(`#EventDet`).should('be.visible');
    // cy.get(`[data-qa="Notification-Event-Details-close"]`).click({ force: true });
    cy.get(`[data-qa="Notification-showNearbyEvents-close"]`).click({ force: true });
    cy.get(`[data-qa="close-tab-NotificationDetails"]`).click({ force: true });

    // Check Actions tab
    // Select a notification, go to troubleshooters
    // https://nanoheal.atlassian.net/browse/NCP-832
    cy.get(`[data-qa="notification-Action-btn"]`).click({ force: true });

    cy.get(`[data-qa="interactiveNotifyPush_1"]`).click();
    cy.get(`[data-qa="selected-site-name"]`).should('be.visible');
  });

  it('reportEventsApi::alert Site', () => {
    cy.visit('/Dashboard');
    login();
    cy.visit('/Dashboard/watcher/');
    cy.contains(`${alertName}AlertTest`).click();
    cy.get('#forAlert').click();
    cy.get('#link-alert').click();
    cy.get('button[data-id="alertsiteEdit"]').click();
    cy.get('[role="option"]').contains(siteName).click({ force: true });
    cy.get('[data-id="notification-item"]').click();
    cy.get('[role="option"]').contains(`${alertName}AlertTest`).click({ force: true });
    cy.get('#link-alert1').click();
    cy.contains(`${alertName}AlertTest`).click({ timeout: 10000 });
    cy.get('.selected').children('td').contains(siteName).should('be.visible');
  });
});

function dart308TernOn() {
  darts();

  cy.contains(`Dart's List`).click();
  cy.wait(2000);
  cy.get('.card-header').should('exist');

  cy.get('#UserInput').type('308{enter}', { force: true });
  cy.get('[data-qa="DART308-PersonalAnalytics"]', { timeout: 10000 }).click({ force: true });
  cy.contains('button', 'Confirm', { timeout: 10000 }).click();
  cy.get('#object').should('not.be.empty');
  cy.get('[for="BrutusinForms#0_0"]', { timeout: 10000 }).should('exist');
  cy.get('[id="BrutusinForms#0_0"]').click({ force: true });
  cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });
}

function createNew308Alert(alertName, procduration) {
  // Create new alert
  alertConfiguration();
  cy.get('#add-alert').click({ force: true });
  cy.get('#alertnameEdit').click({ force: true }).clear().type(`${alertName}AlertTest`);

  cy.get('[data-id="dartedit-item2"]').click();
  cy.get('[role="combobox"]').contains(' Dart 308 - Personal Analytics').click({ force: true });

  cy.get('[data-id=".dartconfig-item"]').click();
  cy.get('[role="combobox"]').contains('text1->procduration').click({ force: true });

  cy.get('[data-id="logicalopt-item0"]').click();
  cy.get('[role="combobox"]').contains('=').click({ force: true });

  cy.get('[data-id="0_status"]').click();
  cy.get('[role="combobox"]').contains('Notification').click({ force: true });

  cy.get('.dartvalue-item1').clear().type(procduration);
  cy.get('#0_count').clear().type('1');
  cy.get('#0_seconds').clear().type('600');

  cy.get('[data-id=".dartconfig-item"]').click();
  cy.get('[role="combobox"]').contains('text1->procduration').click({ force: true });

  cy.get('[data-qa="save-alert-button"]').click({ force: true });
}

function createNewComplex308Alert(alertName, procduration) {
  // Create new alert
  alertConfiguration();
  cy.get('#add-alert').click({ force: true });
  cy.get('#alertnameEdit').click({ force: true }).clear().type(`${alertName}AlertTest`);

  cy.get('[data-id="dartedit-item2"]').click();
  cy.get('[role="combobox"]').contains(' Dart 308 - Personal Analytics').click({ force: true });

  cy.get('[data-id=".dartconfig-item"]').click();
  cy.get('[role="combobox"]').contains('text1->procduration').click({ force: true });

  cy.get('[data-id="logicalopt-item0"]').click();
  cy.get('[role="combobox"]').contains('=').click({ force: true });

  cy.get('[data-id="0_status"]').click();
  cy.get('[role="combobox"]').contains('Notification').click({ force: true });

  cy.get('.dartvalue-item1').clear().type(procduration);
  cy.get('#0_count').clear().type('1');
  cy.get('#0_seconds').clear().type('600');

  cy.get('[data-id=".dartconfig-item"]').click();
  cy.get('[role="combobox"]').contains('text1->procduration').click({ force: true });

  cy.get('#editAlertForm').contains('+ Add another filter condition').click();
  cy.get('#editAlertForm').contains('+ Add another filter condition').click();

  // cy.get('#editAlertForm').contains('+ Add More Measure').click();
  // cy.get('#editAlertForm').contains('+ Add More Measure').click();

  cy.get('[data-id="logical-group-opt-item1"]').click();
  cy.get('[role="combobox"]').contains('OR').click({ force: true });

  cy.get('[data-id="logicalopt-item2"]').click();
  cy.get('[role="combobox"]').contains('Contains').click({ force: true });
  cy.get('[data-qa="FilterCondition1_input1"]').clear().type('%');

  cy.get('[data-id="logicalopt-item1"]').click();
  cy.get('[role="combobox"]').contains('=').click({ force: true });
  cy.get('[data-qa="FilterCondition1_input1"]').clear().type('9');

  cy.get('[data-qa="FilterCondition_2_holder"] [data-id="logical-group-opt-item2"]').click();
  cy.get('[data-qa="FilterCondition_2_holder"] [role="combobox"]').contains('OR').click({ force: true });

  cy.get('[data-qa="FilterCondition2_input1"]').clear().type('90');

  cy.get('[data-qa="FilterCondition_2_holder"] .dartconfig-item button').click();
  cy.get('[data-qa="FilterCondition_2_holder"] [role="combobox"]').contains('text1->windows').click({ force: true });

  cy.get(`[data-qa="save-alert-button"]`).click({ force: true });

  // Open for Edit and Check that the settings is the same.
  // for https://nanoheal.atlassian.net/browse/NCP-870
  cy.contains(`${alertName}AlertTest`).dblclick();
  cy.get(`[data-qa="alertnameEdit"]`).should('exist').should('have.value', `${alertName}AlertTest`);
  cy.get('[data-id="dartedit-item2"][title="Dart 308 - Personal Analytics"]').should('exist');
  cy.get('button[title="text1->procduration"]').should('exist');
  cy.get(`[data-qa="FilterCondition0_input1"]`).should('exist').should('have.value', '24');

  cy.get('button[title="text1->Date"]').should('exist');
  cy.get(`[data-qa="FilterCondition1_input1"]`).should('exist').should('have.value', '9');
  cy.get('button[title="text1->windows"]').should('exist');
  cy.get(`[data-qa="FilterCondition2_input1"]`).should('exist').should('have.value', '90');
  cy.get('button[title="Notification"]').should('exist');
  cy.get(`#0_seconds`).should('exist').should('have.value', '600');

  cy.get('[data-id="logical-group-opt-item1"][title="OR"]').should('exist');
  cy.get('[data-id="logical-group-opt-item2"][title="OR"]').should('exist');

  cy.get('[data-target="rsc-edit-alert"]').click({ force: true });
}
