/**
 * Helper to typecheck and tslint our code
 * 
 */
const typeAndLinter = require('fuse-box-typechecker').TypeHelper({
  tsConfig: './tsconfig.json',
  name: 'src',
  basePath: './',
  tsLint: './tslint.json',
  yellowOnLint: true,
  shortenFilenames: true
});

// Create thread, this is so we dont block dev server
typeAndLinter.createThread();


module.exports.runTypeChecker = function () {
  
  // Same color..
  console.log('\x1b[36m%s\x1b[0m', 'app bundled- running type check');

  // Call thread
  typeAndLinter.inspectCodeWithWorker(Object.assign(typeAndLinter.options, { quit: false, type: 'watch' }));
  typeAndLinter.printResultWithWorker();

};









