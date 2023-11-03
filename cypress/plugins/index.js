/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { isFileExist, findFiles } = require('cy-verify-downloads');

const fs = require('fs-extra');
const path = require('path');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

async function getConfigurationByFile(file) {
  try {
    const pathToConfigFile = path.resolve(`cypress-${file}.json`);
    return await fs.readJson(pathToConfigFile);
  } catch (e) {
    console.log(`File cypress-${file}.json not found`);
    return { env: {} };
  }
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = async (on, config) => {
  const file = config.env.brunch || 'master';

  on('task', { isFileExist, findFiles });

  const conf = await getConfigurationByFile(file);
  conf.env = { ...config.env, ...conf.env };
  on('task', { downloadFile });

  if (process.env.TEST_SERVER_HOST_NAME) {
    conf.baseUrl = `https://${process.env.TEST_SERVER_HOST_NAME}`;
  }
  console.log(`conf`, conf);
  const res = { ...config, ...conf };

  console.log(`res conf`, res);
  return res;
};
