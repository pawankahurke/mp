// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
require('cy-verify-downloads').addCustomCommand();
require('cypress-downloadfile/lib/downloadFileCommand');

Cypress.Commands.add('forceVisit', url => {
  cy.window().then(win => {
    return win.open(url, '_self');
  });
});
