const typeAndLinter = require('fuse-box-typechecker').TypeHelper({
    tsConfig: './tsconfig.json',
    name: 'src',
    basePath: './',
    tsLint: './tslint.json',
    yellowOnLint: true,
    shortenFilenames: true
})



// create thread
// this is so we dont block dev server
typeAndLinter.createThread();



module.exports.runTypeChecker = function () {
    // same color..
    console.log(`\x1b[36m%s\x1b[0m`, `app bundled- running type check`);

    //call thread
    typeAndLinter.inspectCodeWithWorker(Object.assign(typeAndLinter.options, { quit: false, type: 'watch' }));
    typeAndLinter.printResultWithWorker();

}









