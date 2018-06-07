
/**
 * Helper to transpile the code using the fusebox-typechecker
 *
 */
const transpiler = require('fuse-box-typechecker').TypeHelper;
const packageName = require('../../package.json').name;

export const transpileTo = function (outDir: string, moduleType: string) {
  const transpile = transpiler({
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
      exclude : ['node_modules', 'dist', 'src/sample', 'dev', 'distTS', 'scripts', 'test']
    }
  });



  return transpile.runSync();
};

