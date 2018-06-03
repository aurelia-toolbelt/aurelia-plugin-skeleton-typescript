// @ts-check
/**
 * Helper to transpile the code using the fusebox-typechecker
 * 
 */
const transpiler = require('fuse-box-typechecker').TypeHelper;
// @ts-ignore
const packageName = require('../package.json').name;

module.exports.transpileTo = function (outDir, moduleType) {
  var transpile = transpiler({
    tsConfig: './tsconfig.json',
    basePath: './',
    tsLint: './tslint.json',
    name: `building:${moduleType}, at: ${outDir}`,
    shortenFilenames: true,
    yellowOnLint: true,
    emit: true,
    clearOnEmit: true,
    tsConfigOverride: {
      compilerOptions: {
        rootDir: `src/${packageName}`,
        outDir: outDir,
        module: moduleType
      },
      paths : {},
      exclude : ['node_modules', 'dist', 'src/sample', 'dev', 'distTS']
    }
  });



  return transpile.runSync();
};

