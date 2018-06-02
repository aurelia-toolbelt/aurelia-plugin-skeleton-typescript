/**
 * Helper to setup the plugin for new users
 * 
 */
const OLD_NAME = require('../package.json').name;
const OLD_VERSION = require('../package.json').version;
const PLUGIN_PACKAGE = './package.json';
const PLUGIN_PACKAGELOCK = './package-lock.json';
const PLUGIN_NAME = process.argv[2];
const PLUGIN_VERSION = process.argv[3] || OLD_VERSION || '1.0.0-beta.1';
const { consoleLog, consoleError } = require('./print');
const { readFile } = require('./readFile');
const { writeFile } = require('./writeFile');
const { renameFolder } = require('./renameFolder');


consoleLog('white', '*****************************************************************\n');
consoleLog('blue', 'Start scaffolding package...');

if (!PLUGIN_NAME) {
  consoleError('Package name is absent, please provide one');
  throw new Error('You must provide a name for your plugin');
}

consoleLog('green', `Plugin name is : ${PLUGIN_NAME}`);
consoleLog('green', `Plugin version is : ${PLUGIN_VERSION}`);
consoleLog('white', 'Reading the package.json file, please wait...');

readFile(PLUGIN_PACKAGE)
  .then((data) => {

    consoleLog('white', 'The package.json file is read, applying necessary changes...');

    let packageJson = JSON.parse(data);
    packageJson.name = PLUGIN_NAME;
    packageJson.version = PLUGIN_VERSION;

    let resources = packageJson.aurelia.build.resources;
    for (let index = 0; index < resources.length; index++) {
      resources[index] = resources[index].replace(OLD_NAME, PLUGIN_NAME);
    }
    packageJson.aurelia.build.resources = resources;

    packageJson = JSON.stringify(packageJson, null, 4);
    return packageJson;

  }).then((packageJson) => {

    consoleLog('white', 'Updating package.json file ...');
    return writeFile(PLUGIN_PACKAGE, packageJson);

  }).then(() => {

    consoleLog('white', 'The package.json file updated');
    consoleLog('white', 'Reading the package.lock.json file, please wait...');
    return readFile(PLUGIN_PACKAGELOCK);

  }).then((data) => {

    consoleLog('white', 'The package-lock.json file is read, applying necessary changes...');

    let packageJson = JSON.parse(data);
    packageJson.name = PLUGIN_NAME;
    packageJson.version = PLUGIN_VERSION;
    packageJson = JSON.stringify(packageJson, null, 4);

    consoleLog('white', 'Updating package.json file ...');
    return writeFile(PLUGIN_PACKAGELOCK, packageJson);

  }).then(() => {

    consoleLog('white', 'The package-lock.json file updated');
  
  }).then(() => {

    consoleLog('white', 'Updating main.ts file ...');
    return readFile('./src/sample/main.ts', 'UTF8');

  }).then((aurelia_main) => {

    aurelia_main = aurelia_main.replace(OLD_NAME, PLUGIN_NAME);
    return writeFile('./src/sample/main.ts', aurelia_main);

  }).then(() => {

    consoleLog('white', 'The main.ts file updated.');
    consoleLog('blue', 'Renaming the folders...');
    return renameFolder(`./src/${OLD_NAME}`, `./src/${PLUGIN_NAME}`);

  }).then(() => {

    consoleLog('blue', 'Rename completed');
    consoleLog('blue', 'Scaffold completed');
    consoleLog('purple', 'Ready to go, run build or watch scripts ');
    consoleLog('white', '\n*****************************************************************\n');

  }).catch((err) => {
    consoleError(err);
  });



