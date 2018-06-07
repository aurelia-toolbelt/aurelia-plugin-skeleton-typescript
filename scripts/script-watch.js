// get typehelper
const Transpiler = require('fuse-box-typechecker').TypeHelper;

// configure
const transpiler = Transpiler({
    tsConfig: './tsconfig.json',
    basePath: './scripts/',
    tsLint: './tslint.json',
    name: 'watch script',
    shortenFilenames: true,
    yellowOnLint: true,
    emit: true,
    clearOnEmit: true
});

// start watch, will only emit when there is no errors
transpiler.runWatch('./src');
