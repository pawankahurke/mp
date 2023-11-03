const fs = require('fs');
const https = require('https');

let cliAction = process.argv[2];

if (cliAction == 'main' || cliAction == 'master') {
  cliAction = 'toQA';
} else if (cliAction == 'production') {
  cliAction = 'toProd';
} else if (cliAction == 'staging') {
  cliAction = 'toStaging';
} else if (cliAction == 'AddMergeRequest') {
  cliAction = 'AddMergeRequest';
} else {
  cliAction = 'devBuild';
}

console.log(`Hi jira, call action: ${cliAction || 'test-run'}`);

function jiraApiCall(path, data = undefined) {
  const jiraHost = `automation.atlassian.com`;
  return new Promise((resolve, reject) => {
    const options = {
      hostname: jiraHost,
      port: 443,
      timeout: 10000,
      path: path,
      method: 'POST',
      rejectUnauthorized: false,
      requestCert: true,
      headers: {
        'Content-type': 'application/json',
      },
    };

    const req = https.request(options, res => {
      let body = '';

      res.on('data', data => {
        body = data;
      });

      res.on('end', () => {
        try {
          console.log(`jira answer:`, String(body));
          resolve(JSON.parse(String(body)));
        } catch (e) {
          console.error(`jira call error:`, e);
          console.error(`jira call error body:`, String(body));
          reject(e);
        }
      });
    });

    req.on('error', error => {
      console.error(`jira call error:`, error);
      reject(error);
    });

    if (data !== undefined) {
      const sendData = JSON.stringify(data);
      console.log(`send:`, sendData);
      req.write(sendData);
    }
    req.end();
  });
}

const changelogFull = String(fs.readFileSync(`./CHANGELOG.md`));

const changelogLast = changelogFull.split('# Version');
let changelog = changelogFull;
if (changelogLast.length > 0) {
  changelog = changelogLast[0];
}

const changelogParts = changelog.split('BUG FIXES:');
if (changelogParts[1]) {
  changelog = changelogParts[1];
}

const changelogRegExp = /NCP[\-_ ]?([0-9]+)/gim;

let m;
const tasks = [];
while ((m = changelogRegExp.exec(changelog))) {
  tasks.push(`NCP-${m[1]}`);
  if (tasks.length > 200) {
    break;
  }
}

const lastVersionRegExp = new RegExp(`Version ${process.env.PROJECT_IMAGE_NAME}-v[0-9]+`, 'img');
const lastVersion = lastVersionRegExp.exec(changelogFull);

let versionName = `${process.env.PROJECT_IMAGE_NAME}-v1`;
if (lastVersion && lastVersion[0]) {
  versionName = lastVersion[0].replace('Version ', '');
}

let CI_COMMIT_BRANCH = process.env.CI_COMMIT_BRANCH;
if (CI_COMMIT_BRANCH === 'main') {
  CI_COMMIT_BRANCH = 'master';
}
if (CI_COMMIT_BRANCH == undefined) {
  CI_COMMIT_BRANCH = process.env.CI_MERGE_REQUEST_SOURCE_BRANCH_NAME;
}

var searchNumTask = changelogRegExp.exec(CI_COMMIT_BRANCH);
if (searchNumTask && searchNumTask[1]) {
  tasks.push(`NCP-${searchNumTask[1]}`);
}

console.log('branch');
console.log(CI_COMMIT_BRANCH);
console.log(tasks[0]);

let versionDescription = `${changelog}`;
const nextVersion = `${process.env.PROJECT_IMAGE_NAME}-v${process.env.CI_PIPELINE_ID || new Date().getTime()}`;

console.log(`versionName`, versionName);
console.log(`nextVersion`, nextVersion);
console.log(`tasks`, tasks);
console.log(`versionDescription`, versionDescription);

const webHooks = {
  toProd: `/pro/hooks/3e5eab1cf643df43407b3c1c6dbb2d7acbca721b`,
  toQA: `/pro/hooks/dfbdf844562c9b0ddce0800025d7edaf622cdd94`,
  toStaging: `/pro/hooks/bff8441bdca4f760871ce457d8e20cacc5736255`,
  devBuild: `/pro/hooks/3f146be27bc466dca588f012a2243dcc4e4acb12`,
  AddMergeRequest: `/pro/hooks/f8ff038d0244f81657c21f9ec8219a3e0a0b6969`,
};

function createCommentsJira() {
  var merge_requests_url = '';
  var comment = '';
  if (process.env.CI_MERGE_REQUEST_IID !== undefined) {
    var pipeline_url = process.env.CI_PIPELINE_URL;
    merge_requests_url = pipeline_url.slice(0, pipeline_url.lastIndexOf('-')) + '-/merge_requests/' + process.env.CI_MERGE_REQUEST_IID;
    comment = 'NEW MERGE REQUEST. URL: ' + merge_requests_url;
  } else {
    comment = 'NEW PIPELINE. URL: ' + process.env.CI_PIPELINE_URL;
  }
  return comment;
}

var jiraComment = '';

if (CI_COMMIT_BRANCH.indexOf('NCP-') >= 0 || CI_COMMIT_BRANCH.indexOf('ncp-') >= 0) {
  jiraComment = createCommentsJira();
}

console.log('Comment to jira');
console.log(jiraComment);

if (webHooks[cliAction]) {
  try {
    const res = jiraApiCall(webHooks[cliAction], {
      issues: tasks,
      data: {
        versionName,
        versionDescription,
        nextVersion,
        PROJECT_IMAGE_NAME: process.env.PROJECT_IMAGE_NAME,
        CI_PIPELINE_ID: process.env.CI_PIPELINE_ID,
        CI_MERGE_REQUEST_TITLE: process.env.CI_MERGE_REQUEST_TITLE,
        CI_PIPELINE_SOURCE: process.env.CI_PIPELINE_SOURCE,
        CI_COMMIT_BRANCH: CI_COMMIT_BRANCH,
        CI_PIPELINE_URL: process.env.CI_PIPELINE_URL,
        COMMENT: jiraComment,
      },
    });
    console.log(res);
  } catch (e) {
    console.error(e);
  }
} else {
  console.log(`Error, no actions available`, tasks);
}
