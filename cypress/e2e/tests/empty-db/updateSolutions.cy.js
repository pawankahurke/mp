import { login } from '../../../helpers/test-utils.js';
import {randomString} from "../../../helpers/test-utils";

Cypress.on('uncaught:exception', (err, runnable) => false);
const NotificationName = `SYPRESSTEST-${randomString(4)}`;

describe('Update Solutions', () => {

  it('Update Solutions', () => {
    cy.visit('/Dashboard');
    login();
    cy.visit('/Dashboard/watcher/');

    //create notifications
    cy.visit('https://localhost/Dashboard/nhmysql/');
    cy.get('#query-valu').type("INSERT INTO event.Notifications\n" +
      "(`global`, ntype, priority, name, username, days, solo, console, email, emaillist, defmail, search_id, seconds, threshold, last_run, next_run, this_run, suspend, retries, group_include, group_exclude, group_suspend, config, machines, excluded, enabled, links, created, modified, skip_owner, email_footer, email_per_site, email_footer_txt, email_sender, autotask, email_edit_notification_link, auto_soln, profile_name, criteria, compCriteria, oldstatus, search_txt, plain_txt, where_txt, show_txt, scrip, dump_from_events, dartConfigId, alertConfig)\n" +
      "VALUES(0, 1, 1,'"+NotificationName+"', 'admin', 0, 0, 1, 1, NULL, 0, 0, 1, 0, 0, 0, 0, 0, 0, 'All', NULL, NULL, NULL, NULL, NULL, 1, 1, 1666260450, 1666262654, 0, 0, 0, NULL, 0, 0, 0, 0, NULL, '[{\"cid\": 1, \"count\": 1, \"status\": 1, \"seconds\": 1}]', NULL, NULL, '$event->text1->ProcessName == 1', 'text1->ProcessName = 1', 'json_extract(text1,''$.ProcessName'') = 1', '$event->text1->ProcessName', 17, 0, '29', NULL);\n",{ parseSpecialCharSequences: false });
    cy.get("#query-submit").click();

    //edit solution
    cy.visit('/Dashboard/watcher/');
    cy.contains(NotificationName).click({force:true});
    cy.get('#forAlert').click();
    cy.get('#updatenew-soln').click();
    cy.get('[data-id="soln"]').click();
    cy.contains("Disk Cleanup").click();
    cy.get('[data-qa="save-solution"]').click();

    cy.wait(2000);
    //delete notification
    cy.contains(NotificationName).click({force:true});
    cy.get('#forAlert').click();
    cy.get('#delete-alert').click();
    cy.contains('Yes, delete it!').click();

  });
});
