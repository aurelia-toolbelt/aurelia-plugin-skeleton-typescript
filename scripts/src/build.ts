/**
 * Build scripts, makes the es2015,commonjs/amd etc in dist folder
 * also copies html and css files over and updates the distTS folder
 *
 */
const { task, src } = require('fuse-box/sparky');
const { transpileTo } = require('./transpile');
const { packageName } = require('../../package.json').name;


// It will not emit code if any errors by default
let typeAndLintErrors = transpileTo('dist/commonjs/', 'commonjs');


if (!typeAndLintErrors) {

  // If commonjs had no errors then we do amd/system and copy css/html


  // ------------------------------------------
  // Transpile
  // ------------------------------------------
  transpileTo('dist/amd/', 'amd');
  transpileTo('dist/system/', 'system');
  transpileTo('dist/es2015/', 'es2015');


  // ------------------------------------------
  // Ts code
  // ------------------------------------------
  src('**/*.*', { base: `../../src/${packageName}` })
    .clean('../../distTS/')
    .dest('../../distTS/')
    .exec();



  // ------------------------------------------
  // Css
  // ------------------------------------------
  src('../../dist/**/*.*').clean('*.css');
  src('**/*.css', { base: `../../src/${packageName}` })
    .dest('../../dist/commonjs/')
    .dest('../../dist/amd/')
    .dest('../../dist/system/')
    .dest('../../dist/es2015/')
    .exec();



  // ------------------------------------------
  // Html
  // ------------------------------------------
  src('../../dist/**/*.*').clean('*.html');
  src('**/*.html', { base: `../../src/${packageName}` })
    .dest('../../dist/commonjs/')
    .dest('../../dist/amd/')
    .dest('../../dist/system/')
    .dest('../../dist/es2015/')
    .exec();



}
