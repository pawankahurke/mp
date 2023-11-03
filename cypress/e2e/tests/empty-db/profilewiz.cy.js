import { login, profiles, randomString, resolution, sites } from '../../../helpers/test-utils.js';
import { createNewSite, addDeviceToSite, selectSite } from '../../../helpers/site-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

const randStr = `${new Date().getTime()}`;
const profileName = `cyProfile${randStr}`;
const siteName = `ProfileCI${randStr}`;
const MachineName = `ProfileCI-${randStr}`;
const uuid = `C1CD0000-C1CD-${randomString(4)}-${randomString(4)}-000000111111`;
const duplicateName = 'duplicateProfile';

describe('profilewiz', () => {
  it('createNewSite', () => {
    cy.visit('/Dashboard');
    login();
    createNewSite(siteName);
    addDeviceToSite(siteName, MachineName, uuid);

    sites();
  });

  it('createProfile, editProfile, duplicate, deleteProfile', () => {
    cy.visit('/Dashboard');
    login();
    profiles();

    createProfile(profileName);

    // cy.get(`#createdtime2`).click(); // sort Profiles list by date

    editProfile(profileName);

    resolution();
    selectSite(siteName);

    duplicateProfile(profileName);
    deleteProfile(duplicateName);

    // cy.get(`#createdtime2`).click(); // sort Profiles list by date
    cy.visit('Dashboard/profiles/');
    profiles();
    attachProfile(profileName, siteName);
    deleteProfile(profileName);
  });
});

/**
 *
 * @param {string} profileName
 */
function createProfile(profileName) {
  cy.get(`[data-qa="h1-addProfile"]`).click({ force: true });
  cy.get(`[data-qa="ph-profile-name"]`).type(profileName);

  cy.wait(500);
  cy.get(`[data-qa="ph-nextProfBtn"]`).click(); // next btn

  cy.wait(500);
  cy.get(`[data-qa="ph-nextProfBtn"]`).click(); // next btn

  cy.wait(500);
  cy.get(`[data-qa="ph-nextProfBtn"]`).click(); // next btn

  cy.get(`[data-qa="ph-Name_of_custom_troubleshooter"]`).type(`custom troubleshooter ${profileName}`);
  cy.get(`[data-qa="ph-Description_of_custom_troubleshooter"]`).type(`Description of custom troubleshooter ${profileName}`);

  cy.get(`[name="os-win[0]"]`).click({ force: true });

  cy.get(`[name="tile-darts[0][]"]`).select(`6`);
  cy.get(`[name="tile-dart-name[0][]"]`).type(`Dart description ${profileName}`);

  cy.wait(500);
  cy.get(`[data-qa="ph-nextProfBtn"]`).click(); // next btn

  cy.wait(500);
  cy.get(`[data-qa="ph-nextProfBtn"]`).click(); // next btn

  cy.wait(500);
  cy.get(`[data-qa="ph-nextProfBtn"]`).click(); // next btn

  cy.get("[title='Java Uninstall']").click();
  // cy.get(`#heading-1-2`).children().contains(`Start-up Optimization`).should('be.visible');

  cy.get(`[data-qa="ph-saveProfBtn"]`).click(); // save btn
}

/**
 *
 * @param {string} profileName
 */
function editProfile(profileName) {
  cy.contains(profileName).should('be.visible').click();

  cy.get(`[data-qa="h1-editprofile"]`).click({ force: true });

  cy.wait(500);
  cy.get(`[data-qa="pe-nextProfBtn"]`).click(); // next btn

  cy.wait(500);
  cy.get(`[data-qa="pe-nextProfBtn"]`).click(); // next btn

  cy.wait(500);
  cy.get(`[data-qa="pe-nextProfBtn"]`).click(); // next btn

  cy.wait(500);
  cy.get(`[data-qa="pe-nextProfBtn"]`).click(); // next btn

  cy.wait(500);
  cy.get(`[data-qa="pe-nextProfBtn"]`).click(); // next btn

  cy.get("[title='Java Uninstall']").click();
  // cy.get(`#heading-1-2`).children().contains(`Start-up Optimization`).should('be.visible');

  cy.get(`[title="Custom Tiles"]`).click({ force: true });
  cy.contains(`custom troubleshooter ${profileName}`); //.should('be.visible');

  cy.get(`[data-qa="pe-saveProfBtn"]`).click(); // save btn
}

/**
 *
 * @param {string} profileName
 */
function attachProfile(profileName) {
  cy.contains(profileName).should('be.visible').click();

  cy.get(`[data-qa="h1-attachProfile"]`).click({ force: true });

  cy.get(`#proatt-sites`).click({ force: true }); // attach to sites

  cy.get('[data-id="siteList"]').click();
  cy.get('[role="combobox"]').contains(siteName).click({ force: true });
  // cy.get('[role="combobox"] li a .text').first().click({ force: true });

  cy.get(`#editfocused`).click({ force: true });

  cy.wait(500);
  cy.get(`[data-qa="attachProfile-save-btn"]`).click();

  cy.wait(500);
  resolution();

  cy.get('[title="Custom Tiles"]').click({ force: true });
  cy.contains(`custom troubleshooter ${profileName}`).should('exist');

  cy.get('[title="Application Solutions"]').click({ force: true });
  cy.contains(`Check that proper version of the logon pad is installed`).should('exist');
}

function duplicateProfile(profileName) {
  cy.visit('/Dashboard/profiles/');
  cy.get('tr > td').contains(profileName).click();
  cy.get('#forProfiles').click();
  cy.get('#duplicateProfile').click();
  cy.get('#duplicate-profile-name').type(duplicateName);
  cy.get("[onclick='duplicateProfileSave()']").click();
  cy.contains('Profile has been duplicated successfully.');
}

function deleteProfile(profileName) {
  cy.visit('/Dashboard/profiles/');
  cy.get('tr > td').contains(profileName).click();
  cy.get('#forProfiles').click();
  cy.get('#deleteProfile').click();
  cy.contains('Yes, delete it!').click();
  cy.contains('Profile has been deleted successfully.');
}
