import { login } from '../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('checkSoftwareDistribution', () => {
  it('Check Software Distribution', () => {
    const name = `Test${new Date().getTime()}`;
    const region = 'US East (N. Virginia) us-east-1';
    const bucket = 'test-bucket-filestorage';
    const url = 'https://s3.console.aws.amazon.com/s3/buckets/test-bucket-filestorage?region=us-east-1&tab=objects';
    const accesskey = 'AKIAQ344E2QDEYMZKWWY';
    const secretkey = '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';

    cy.visit('/Dashboard');
    login();
    cy.visit('/Dashboard/softdist/');

    cy.get(`[data-qa=forSoftwareDistribution]`).click();
    cy.contains('Configure Upload').click();

    cy.get('#inconf-btn-type-cdn').click();

    cy.get('#cdnurl').type(url);
    cy.get('#cdnAk').type(accesskey);
    cy.get('#cdnSk').type(secretkey);
    cy.get('#bucket').type(bucket);
    cy.get('#region').type(region);

    cy.get('#cdnconfigPack').click();

    cy.visit('/Dashboard/softdist/');
    
    cy.get(`[data-qa=forSoftwareDistribution]`).click();
    cy.get(`[data-qa=addNewSoftware]`).click();
    cy.get(`[data-qa=platformSelect]`).click().find('span.text', { timeout: 100000 }).first().click();
    cy.get(`[data-qa=selectType]`).click().find('span.text', { timeout: 100000 }).first().click();

    cy.get(`[data-qa=locationSelect]`).click().find('span.text', { timeout: 100000 }).last().click();
    cy.get(`[data-qa=cdnSelType]`).click().find('span.text', { timeout: 100000 }).first().click();

    cy.get('[data-qa=packName]').type(name);
    cy.get('[data-qa=packDesc]').type(name);
    cy.get('[data-qa=version]').type('1.0');

    cy.get(`[data-qa=checkAddConfigtype_2No]`).click();
    cy.get(`[data-qa=availableGloballyNo]`).click();

    cy.get(`[data-qa=addPackage]`).click();
  });
});
