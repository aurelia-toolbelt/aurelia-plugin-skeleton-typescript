/**
 * Helper to transpile the code using the fusebox-typechecker
 * 
 */
const transpiler = require('fuse-box-typechecker').TypeHelper;
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
    clearOnEmit: true
  });

  transpile.options.tsConfigJsonContent.compilerOptions.rootDir = `src/${packageName}`;
  transpile.options.tsConfigJsonContent.compilerOptions.outDir = outDir;
  transpile.options.tsConfigJsonContent.compilerOptions.module = moduleType;
  transpile.options.tsConfigJsonContent.paths = {};
  transpile.options.tsConfigJsonContent.exclude = ['node_modules', 'dist', 'src/sample', 'dev', 'distTS'];
  return transpile.runSync();
};

