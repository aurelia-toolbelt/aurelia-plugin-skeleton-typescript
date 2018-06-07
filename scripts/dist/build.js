var _a = require('fuse-box/sparky'), task = _a.task, src = _a.src;
var transpileTo = require('./transpile').transpileTo;
var packageName = require('../../package.json').name.packageName;
var typeAndLintErrors = transpileTo('dist/commonjs/', 'commonjs');
if (!typeAndLintErrors) {
    transpileTo('dist/amd/', 'amd');
    transpileTo('dist/system/', 'system');
    transpileTo('dist/es2015/', 'es2015');
    src('**/*.*', { base: "../../src/" + packageName })
        .clean('../../distTS/')
        .dest('../../distTS/')
        .exec();
    src('../../dist/**/*.*').clean('*.css');
    src('**/*.css', { base: "../../src/" + packageName })
        .dest('../../dist/commonjs/')
        .dest('../../dist/amd/')
        .dest('../../dist/system/')
        .dest('../../dist/es2015/')
        .exec();
    src('../../dist/**/*.*').clean('*.html');
    src('**/*.html', { base: "../../src/" + packageName })
        .dest('../../dist/commonjs/')
        .dest('../../dist/amd/')
        .dest('../../dist/system/')
        .dest('../../dist/es2015/')
        .exec();
}
//# sourceMappingURL=build.js.map