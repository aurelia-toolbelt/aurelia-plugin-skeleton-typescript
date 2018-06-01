const fs = require("fs");

const OLD_NAME = require('../package.json').name;
const OLD_VERSION = require('../package.json').version;

const PLUGIN_PACKAGE = `./package.json`;

const PLUGIN_NAME = process.argv[2];
const PLUGIN_VERSION = process.argv[3] || OLD_VERSION || '1.0.0-beta.1';

console.info("\x1b[37m", '*****************************************************************\n');
console.info("\x1b[36m", 'Start scaffolding package...');

if (!PLUGIN_NAME) {
  console.error("\x1b[31m", 'Package name is absent, please provide one');
  throw new Error('You must provide a name for your plugin');
}

console.info("\x1b[32m", `Plugin name is : ${PLUGIN_NAME}`);
console.info("\x1b[32m", `Plugin version is : ${PLUGIN_VERSION}`);

console.info("\x1b[37m", 'Reading the package.json file, please wait...');


fs.readFile(PLUGIN_PACKAGE, 'UTF8', (err, data) => {

  console.info("\x1b[37m", 'The package.json file is read, applying necessary changes...');

  let package = JSON.parse(data);

  package.name = PLUGIN_NAME;
  package.version = PLUGIN_VERSION;

  let resources = package.aurelia.build.resources;
  for (let index = 0; index < resources.length; index++) {
    resources[index] = resources[index].replace(OLD_NAME, PLUGIN_NAME);
  }
  package.aurelia.build.resources = resources;

  package = JSON.stringify(package, null, 4);

  console.info("\x1b[37m", 'Updating package.json file ...');

  fs.writeFile(PLUGIN_PACKAGE, package, function (e) {

    console.info("\x1b[37m", 'The package.json file updated');

    console.info("\x1b[37m", 'Updating main.ts file ...');
    let aurelia_main = fs.readFileSync(`./src/sample/main.ts`, 'UTF8');
    aurelia_main = aurelia_main.replace(OLD_NAME, PLUGIN_NAME);
    fs.writeFileSync(`./src/sample/main.ts`, aurelia_main, 'UTF8');
    console.info("\x1b[37m", 'The main.ts file updated.');

    console.info("\x1b[36m", 'Renaming the folders...');
    fs.rename(`./src/${OLD_NAME}`, `./src/${PLUGIN_NAME}`, function (err) {
      if (err) throw err;
      console.info("\x1b[36m", 'Rename completed');
      console.info("\x1b[36m", 'Scaffold completed');
      console.info("\x1b[35m", 'Ready to go, run build or watch scripts ');
      console.info("\x1b[37m", '\n*****************************************************************\n');
    });


  });
});
