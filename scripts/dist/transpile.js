Object.defineProperty(exports, "__esModule", { value: true });
var transpiler = require('fuse-box-typechecker').TypeHelper;
var packageName = require('../../package.json').name;
exports.transpileTo = function (outDir, moduleType) {
    var transpile = transpiler({
        tsConfig: './tsconfig.json',
        basePath: './',
        tsLint: './tslint.json',
        name: "building:" + moduleType + ", at: " + outDir,
        shortenFilenames: true,
        yellowOnLint: true,
        emit: true,
        clearOnEmit: true,
        tsConfigOverride: {
            compilerOptions: {
                rootDir: "src/" + packageName,
                outDir: outDir,
                module: moduleType
            },
            paths: {},
            exclude: ['node_modules', 'dist', 'src/sample', 'dev', 'distTS', 'scripts', 'test']
        }
    });
    return transpile.runSync();
};
//# sourceMappingURL=transpile.js.map