import { login, notifications } from '../../../helpers/test-utils.js';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('notification test (empty-db)', () => {
  it('notification', () => {
    cy.visit('/Dashboard');
    login();

    cy.visit('/Dashboard/nhmysql/index.php');

    cy.get('#query-valu').should('be.visible');
    cy.get('#query-submit').should('be.visible');

    const q =
      "INSERT INTO event.Console (ntype, priority, name, username, site, machine, nid, this_run, activeStatus, status, servertime) VALUES (3, 1, 'CPU Usage > 90%', 'admin', 'Dyson_prod', 'AUCCD001187', 1, 1647462300, 1, 4, 1647462357);";
    cy.get('#query-valu').clear().type(q);
    cy.get('#query-submit').click();
    cy.get('[data-qa="QueryExecutedSuccessfully"]').should('exist');
    cy.get('[data-qa="QueryExecutedFailed"]').should('not.exist');

    // Alert Configuration
    // @todo check that this 2 records will exists on Alert Configuration page https://staging.nanoheal.work/Dashboard/watcher/
    const n1 =
      "INSERT INTO event.Notifications (global, ntype, priority, name, username, days, solo, console, email, seconds, threshold, last_run, next_run, this_run, group_include, enabled, created, modified) VALUES (0, 3, 1, 'CPU Usage > 90%', 'admin', 0, 0, 1, 1, 21600, 0, 0, 0, 0, 'Capgemini_Testing,Endeavour_Testing,Fieldfeet_Testing', 1, 1617275284, 1630302446);";
    cy.get('#query-valu').clear().type(n1);
    cy.get('#query-submit').click();

    /*const n2 =
    "INSERT INTO event.Notifications (global, ntype, priority, name, username, days, solo, console, email, seconds, threshold, last_run, next_run, this_run, group_include, enabled, created, modified) VALUES (0, 5, 1, 'High boot time', 'admin', 0, 0, 1, 1, 60, 0, 0, 0, 0, 'All', 1, 1647328321, 1647406362);";
    ;
    cy.get('#query-valu').clear().type(n2);
    cy.get('#query-submit').click();


    const q2 =
    "select machine,name, site,id,nocStatus, comment as note,count(machine) as count, FROM_UNIXTIME(this_run, '%d-%m-%Y') as ndate, this_run ,actionNote from event.Console where status  = 4 ";
    ;
    cy.get('#query-valu').clear().type(q2);
    cy.get('#query-submit').click();


    const q3 =
      "select * from event.Notifications N join event.Console C on N.name = C.name and N.id = C.nid where C.status = 4 group by N.name"

    cy.get('#query-valu').clear().type(q3);
    cy.get('#query-submit').click();*/

    cy.visit('/Dashboard/notification/');
  });
});
