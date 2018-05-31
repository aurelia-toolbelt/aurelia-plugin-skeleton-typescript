const { task, src } = require('fuse-box/sparky');
const { transpileTo } = require('./transpile');
const packageName = require('../package.json').name;


// it will not emit code if any errors by default
var typeAndLintErrors = transpileTo('dist/commonjs/', 'commonjs');


if (!typeAndLintErrors) {

    // if commonjs had no errors then we do amd/system and copy css/html


    // ------------------------------------------
    // transpile
    // ------------------------------------------
    transpileTo('dist/amd/', 'amd');
    transpileTo('dist/system/', 'system');
    transpileTo('dist/es2015/', 'es2015');


    // ------------------------------------------
    // ts code
    // ------------------------------------------
    src('**/*.*', { base: `../src/${packageName}` })
        .clean('../distTS/')
        .dest('../distTS/')
        .exec();



    // ------------------------------------------
    // css
    // ------------------------------------------
    src('../dist/**/*.*').clean('*.css')
    src('**/*.css', { base: `../src/${packageName}` })
        .dest('../dist/commonjs/')
        .dest('../dist/amd/')
        .dest('../dist/system/')
        .dest('../dist/es2015/')
        .exec();



    // ------------------------------------------
    // html
    // ------------------------------------------
    src('../dist/**/*.*').clean('*.html')
    src('**/*.html', { base: `../src/${packageName}` })
        .dest('../dist/commonjs/')
        .dest('../dist/amd/')
        .dest('../dist/system/')
        .dest('../dist/es2015/')
        .exec();



}
