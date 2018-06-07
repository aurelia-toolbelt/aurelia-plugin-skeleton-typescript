Object.defineProperty(exports, "__esModule", { value: true });
var typeAndLinter = require('fuse-box-typechecker').TypeHelper({
    tsConfig: './tsconfig.json',
    name: 'src',
    basePath: './',
    tsLint: './tslint.json',
    yellowOnLint: true,
    shortenFilenames: true,
    tsConfigOverride: {}
});
typeAndLinter.startTreadAndWait();
exports.runTypeChecker = function () {
    console.log('\x1b[36m%s\x1b[0m', 'app bundled- running type check');
    typeAndLinter.useThreadAndTypecheck();
};
//# sourceMappingURL=typechecker.js.map