/**
 * Helper to setup the plugin for new users
 * 
 */
const OLD_PLUGIN_NAME = require('../package.json').name;
const OLD_PLUGIN_VERSION = require('../package.json').version;
const PLUGIN_PACKAGE_PATH = './package.json';
const PLUGIN_PACKAGELOCK_PATH = './package-lock.json';
const NEW_PLUGIN_NAME = process.argv[2];
const NEW_PLUGIN_VERSION = process.argv[3] || OLD_PLUGIN_VERSION || '1.0.0-beta.1';

const { consoleLog, consoleError } = require('./print');
const { readFile } = require('./readFile');
const { writeFile } = require('./writeFile');
const { renameFolder } = require('./renameFolder');


const setup = async function () {

  consoleLog('white', '*****************************************************************\n');
  consoleLog('blue', 'Start scaffolding package...');

  if (!NEW_PLUGIN_NAME) {
    consoleError('Package name is absent, please provide one');
    throw new Error('You must provide a name for your plugin');
  }

  try {

    consoleLog('green', `Plugin name is : ${NEW_PLUGIN_NAME}`);
    consoleLog('green', `Plugin version is : ${NEW_PLUGIN_VERSION}`);
    consoleLog('white', 'Reading the package.json file, please wait...');

    let packageJsonRaw = await readFile(PLUGIN_PACKAGE_PATH);
    consoleLog('white', 'The package.json file is read, applying necessary changes...');

    let packageJsonObj = JSON.parse(packageJsonRaw);
    packageJsonObj.name = NEW_PLUGIN_NAME;
    packageJsonObj.version = NEW_PLUGIN_VERSION;

    let resources = packageJsonObj.aurelia.build.resources;
    for (let index = 0; index < resources.length; index++) {
      resources[index] = resources[index].replace(OLD_PLUGIN_NAME, NEW_PLUGIN_NAME);
    }
    packageJsonObj.aurelia.build.resources = resources;
    packageJsonObj = JSON.stringify(packageJsonObj, null, 4);


    consoleLog('white', 'Updating package.json file ...');
    await writeFile(PLUGIN_PACKAGE_PATH, packageJsonObj);
    consoleLog('white', 'The package.json file updated');

    consoleLog('white', 'Reading the package.lock.json file, please wait...');
    let packageLockJsonRaw = await readFile(PLUGIN_PACKAGELOCK_PATH);
    consoleLog('white', 'The package-lock.json file is read, applying necessary changes...');

    let packageLockJsonObj = JSON.parse(packageLockJsonRaw);
    packageLockJsonObj.name = NEW_PLUGIN_NAME;
    packageLockJsonObj.version = NEW_PLUGIN_VERSION;
    packageLockJsonObj = JSON.stringify(packageLockJsonObj, null, 4);

    consoleLog('white', 'Updating package.json file ...');
    await writeFile(PLUGIN_PACKAGELOCK_PATH, packageLockJsonObj);
    consoleLog('white', 'The package-lock.json file updated');

    consoleLog('white', 'Updating main.ts file ...');
    let aurelia_main = await readFile('./src/sample/main.ts', 'UTF8');
    aurelia_main = aurelia_main.replace(`.plugin(${OLD_PLUGIN_NAME})`, `.plugin(${NEW_PLUGIN_NAME})`);
    await writeFile('./src/sample/main.ts', aurelia_main);
    consoleLog('white', 'The main.ts file updated.');

    consoleLog('blue', 'Renaming the folders...');
    await renameFolder(`./src/${OLD_PLUGIN_NAME}`, `./src/${NEW_PLUGIN_NAME}`);
    consoleLog('blue', 'Rename completed');

    consoleLog('blue', 'Scaffold completed');
    consoleLog('purple', 'Ready to go, run build or watch scripts ');
    consoleLog('white', '\n*****************************************************************\n');

  } catch (err) {

    consoleError(err);

  }


};

setup();
