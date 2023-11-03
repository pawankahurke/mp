/// <reference types="cypress" />
import {
  compliance,
  login,
  logOut,
  notifications,
  resolution,
  softdistСonfig,
  patchManagement,
  census,
  device,
  services,
  profiles,
  adreset,
  softwareDistribution,
  patchManagementConfig,
  alertConfiguration,
  users,
  accessRight,
  nanohealUpdate,
  activeDirectory,
  serviceNow,
  sites,
  clientFileDownload,
} from '../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('E2E', () => {
  it('Check all', () => {
    cy.visit('/Dashboard');
    login();

    cy.get('div.container-fluid').should('be.visible');
    cy.get('li.enableAnchorTag').should('be.visible');

    //---------- Agent Workspace

    notifications();
    compliance();
    resolution();
    softdistСonfig();
    patchManagement();

    //----------- Management

    census();
    device();
    services();
    profiles();
    adreset();
    softwareDistribution();
    patchManagementConfig();
    alertConfiguration();
    users();
    accessRight();
    nanohealUpdate();

    //-------------- Integrations

    activeDirectory();
    serviceNow();

    //-------------- Deployments

    sites();
    logOut();
  });
});
