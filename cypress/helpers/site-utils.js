import { dart148_OneWaySynchronization, sendRawEvent } from './client-events.js';
import { sites } from './test-utils.js';

export function addDeviceToSite(siteName = `TestCI`, MachineName, uuid) {
  const event = dart148_OneWaySynchronization(siteName, MachineName, uuid);
  sendRawEvent(event, 1);
}

export function createNewSite(siteName = `TestCI`) {
  // Create new site
  sites();
  cy.get('[data-qa="Add-New-Site"]').click({ force: true });
  cy.get('[data-qa="deploy_sitename"]').type(siteName);
  cy.get('[data-qa="client32_name"]').type(siteName);
  cy.get('[data-qa="client64_name"]').type(siteName);
  cy.get('#branding_url').type(siteName);
  cy.get('#addDeploymentSiteBtn').click();
}

export function selectSite(siteName = `TestCI`) {
  cy.get(`#dropdownMenuButton`).click();
  cy.get('#' + siteName).click();
  cy.get(`[data-qa="saveSelectState"]`).click();
}
