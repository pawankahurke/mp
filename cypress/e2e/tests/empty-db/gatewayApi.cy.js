Cypress.on('uncaught:exception', (err, runnable) => false);

describe('check all links in /main/config/groups.php?act=dbug', () => {

  it('check all links in /gateway/index', () => {

    cy.request({
      url: '/gateway/Dashboard/api/profile/getProfileItems/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getProfileItems/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getMachinewise/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getMachinewise/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getjobstatus/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getjobstatus/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/get_V6_profile_format/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/get_V6_profile_format/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/GetMachineUniqId/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/GetMachineUniqId/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/GetSiteUniqId/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/GetSiteUniqId/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getMachineOS_func/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getMachineOS_func/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/get_nodeJobUrl_v6/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/get_nodeJobUrl_v6/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getProfileTiles/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getProfileTiles/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getElasticBasicInfo/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getElasticBasicInfo/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getMachineDetails/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getMachineDetails/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getMachinesList/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getMachinesList/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getNotificationSummary/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getNotificationSummary/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getProfileData/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getProfileData/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getProfileSolutions/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getProfileSolutions/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getTilesSolutions/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getTilesSolutions/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getSolutions/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getSolutions/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/get_mgroupuniqueid/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/get_mgroupuniqueid/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);

    cy.request(Cypress.env('apiKey'), {
      url: '/gateway/Dashboard/api/profile/getTicketInfo/',
      method: 'GET',
      failOnStatusCode: true,
    }).its("status").should("eql", 200);

    cy.request({
      url: '/gateway/Dashboard/api/profile/getTicketInfo/',
      method: 'GET',
      failOnStatusCode: false,
    }).its("status").should("eql", 401);
  });
});