export const login = async (email, password) => {
  cy.get('#email').type(email || Cypress.env('ACCAUNT_LOGIN'));
  cy.get('#password').type(password || Cypress.env('ACCAUNT_PASSWORD'));
  cy.get('#loginSubmitId').click();
  cy.url().should('include', 'home');
};

export const logOut = async () => {
  cy.get('[data-qa=logOut]').click({ force: true });
  cy.url().should('include', '/Dashboard');
};

// --------------Agent Workspace

export const notifications = async () => {
  cy.get(`[data-qa="menu-notifications"]`).click({ force: true });
  // cy.get('div.innerPage').should('be.visible'); @todo fix the test later.
};

export const compliance = async () => {
  cy.get(`a[data-qa=compliance]`).click({ force: true });
  cy.get('div.innerPage').should('be.visible');
};

export const resolution = async () => {
  cy.get(`a[data-qa=manageDevices]`).click({ force: true });
  cy.get('div.innerPage').should('be.visible');

  // @todo return back when we add more test devices
  // cy.get('[data-qa="profileDataList_info::morelist"]').should('exist');
  // cy.get('[data-qa="Troubleshooter-empty-result"]').should('not.exist');
};

export const softdistСonfig = async () => {
  cy.get(`a[data-qa=softdistConfig]`).click({ force: true });
  cy.get('div.dataTables_wrapper').should('be.visible');
};

export const patchManagement = async () => {
  cy.get(`a[data-qa=patchManagement]`).click({ force: true });
  cy.get('div.toolbar').should('be.visible');
};

//--------------Management

export const census = async () => {
  cy.get(`a[data-qa=census]`).click({ force: true });
  cy.get('div.card-body').should('be.visible');
  cy.get('table[data-qa=tableCensus]').should('be.visible');
};

export const device = async () => {
  cy.get(`a[data-qa=groups]`).click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const dartsStatusCheck = async () => {
  cy.visit('/Dashboard/auditlog/');
  cy.get(`#auditlog_datatable`).should('be.visible');
  cy.get('#notifyDtl_lengthSel').select('100', { force: true });
  cy.get('#auditlog_datatable tr td [title="Services"]', { timeout: 100000 }).contains('Services');
  // @todo Check why some time status not Success
  // cy.get('#auditlog_datatable > tbody > tr:nth-child(1) > td:nth-child(10)').should('have.text', 'Success');
  // cy.get('#auditlog_datatable > tbody > tr:nth-child(2) > td:nth-child(10)').should('have.text', 'Success');
  // cy.get('#auditlog_datatable > tbody > tr:nth-child(3) > td:nth-child(10)').should('have.text', 'Success');
};

export const services = async () => {
  cy.get(`a[data-qa=darts]`).click({ force: true });
  cy.get('div.card-body').should('be.visible');
  cy.get('ul[data-qa=parentDesc]').should('be.visible');
  cy.get('[data-qa=DART411-CameraPolicies]', { timeout: 200000 }).click();
  cy.get('button.swal2-confirm').should('be.visible');
};

export const darts = async () => {
  cy.get(`a[data-qa=darts]`).click({ force: true });
  cy.get('div.card-body').should('be.visible');
  cy.get('ul[data-qa=parentDesc]').should('be.visible');
};

export const profiles = async () => {
  cy.get(`a[data-qa=profiles]`).click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const adreset = async () => {
  cy.get('a[data-qa=passwordReset]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const softwareDistribution = async () => {
  cy.get('a[data-qa=softwareDistribution]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const patchManagementConfig = async () => {
  cy.get('a[data-qa=patchManagementConfig]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const alertConfiguration = async () => {
  cy.get('a[data-qa=alertConfiguration]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const users = async () => {
  cy.get('a[data-qa=users]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const accessRight = async () => {
  cy.get('a[data-qa=accessRight]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const userApproval = async () => {
  cy.get('a[data-qa=userApproval]').click({ force: true });
  cy.get('[data-qa="userApprovalPageBody"]').should('be.visible');
};

export const usersList = async () => {
  cy.get('a[data-qa=users]').click({ force: true });
  cy.get('#user_datatable_wrapper').should('be.visible');
};
export const nanohealUpdate = async () => {
  cy.get('a[data-qa=nanohealUpdate]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

//-------------- Integrations

export const activeDirectory = async () => {
  cy.get('a[data-qa=activeDirectory]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const singleSignOn = async () => {
  cy.get('a[data-qa=singleSignOn]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

export const serviceNow = async () => {
  cy.get('a[data-qa=serviceNow]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

//-------------- Deployments

export const sites = async () => {
  cy.get('a[data-qa=sites]').click({ force: true });
  cy.get('div.card-body').should('be.visible');
};

//-------------- Security

//export const userActivityAudit = async () => {
//  cy.get('a[data-qa=userActivityAudit]').click({ force: true });
//  cy.get('div.card-body').should('be.visible');
//};

//export const dartAudit = async () => {
//  cy.get('a[data-qa=dartAudit]').click({ force: true });
//  cy.get('div.card-body').should('be.visible');
//};

// export const automationAudit = async () => {
//   cy.get('[data-qa=automationAudit]').click({ force: true })
//   cy.get('div.card-body').should('be.visible')
// }

//export const loginAudit = async () => {
//  cy.get('a[data-qa=loginAudit]').click({ force: true });
// cy.get('div.card-body').should('be.visible');
//};

//-------------- Client file downloading

export const clientFileDownload = async () => {
  cy.downloadFile(
    'https://cicd.nanoheal.work/Dashboard/Provision/download/download_helper.php?rcode=0317353128&seid=80',
    'cypress/downloads',
    'clientFile.exe',
  );
};

export function randomString(len = 1) {
  let res = '';
  for (let i = 0; i <= len; i++) {
    res += `${Math.floor(Math.random() * 10)}`;
  }
  return res;
}

export function nowTime() {
  return Math.floor(new Date().getTime() / 1000);
}
