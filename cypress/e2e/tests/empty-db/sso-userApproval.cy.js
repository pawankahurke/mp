import { login, userApproval, usersList } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('userApproval (empty-db)', () => {
  it('userApproval', () => {
    cy.visit('/Dashboard');
    login();
    usersList();
    cy.get(`#user_datatable`).should('be.visible');

    cy.get('#loader').should('exist');
    cy.get('#loader').should('not.be.visible');

    cy.get('body').then(body => {
      const usersTd = body.find('#user_datatable tr td');
      let cicdUser = false;
      for (let i = 0; i < usersTd.length; i++) {
        if (usersTd[i].innerHTML === `levhav@yandex.ru`) {
          const cicdEmail = usersTd[i];
          const row = cicdEmail.parentElement.children;
          for (let i = 0; i < row.length; i++) {
            if (row[i].innerHTML === `Active`) {
              cicdUser = true;
              break;
            }
          }
          break;
        }
      }

      if (!cicdUser) {
        // If the user was approved in previous tests we can skip the next lines.
        userApproval();
        cy.get('body').then(body2 => {
          const hasUsers = body2.find('[data-qa="no-pending-userApproval"]');
          // debugger;
          if (hasUsers.length === 0) {
            cy.get('[data-qa="site-option-0"]').invoke('attr', 'selected', 'true');
            cy.wait(1000);
            cy.get(`[data-qa="approveUser-0"]`).should('be.visible').click();
            cy.get(`[data-qa="saveUserDetails-0"]`).should('be.visible').click();
          } else {
            cy.get(`[data-qa="no-pending-userApproval"]`).should('be.visible');
          }
        });
      }
    });
  });
});

// mysql -h dp-1-38-mysql.default.svc.cluster.local -u root -pb6Q4qT17xyfYJS9CJP2019#
