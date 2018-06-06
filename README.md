
![Imgur](https://i.imgur.com/xVO5NYd.png)

# Aurelia plugin skeleton with Typescript

Need to make a Aurelia Typescript plugin ?
If the answer is "YES!!!", then you have just found the perfect place to start :-)

Here is the key components of the plugin skeleton:
1. [Typescript](https://www.typescriptlang.org/) as a typed superset of JavaScript that compiles to plain JavaScript.
2. [FuseBox](https://github.com/fuse-box/fuse-box) as a bundler/module loader for the **sample** (incl [fuse-box-aurelia-loader](https://github.com/fuse-box/fuse-box-aurelia-loader))
3. [Jest](https://facebook.github.io/jest/) as delightful JavaScript testing.
4. [Puppeteer](Puppeteer) as headless Chrome for E2E testing.
5. [FuseBox Typechecker](https://github.com/fuse-box/fuse-box-typechecker) as a simple helper to do typechecking & linting while developing and producting the final build.

### How to build and run sample
* ```npm run watch``` 
  * Launches sample and watches src folder
  * it typcheckes and tslints on every save
* ```npm run build``` 
  * Produces amd/commonjs/system/es2015 builds
  * This will *not* emit/update files if you have any typescript or tslint errors

### How to rename to your own plugin
* ```npm run setup```
  * Answer the question about name and version.
  * Then run `npm run watch` 
  * Now open `http://localhost:4444` to see plugin in action.
  
### How to run unitTest

* ```npm run unitTest```
  * for unit testing with Jest.
* ```npm run unitTestWatch```
  * for unit testing with Jest in watch mode.
* ```npm run unitTestCoverage```
  * for unit testing with Jest with test coverage info.
  
### How to run E2E-test

* ```npm run e2eTest```
  * Make sure you are running the sample, `npm watch` before you run the test

### Before you start code you also need to:
*  delete .git folder and run `git init`
* update package.json with 
  * description
  * keywords
  * homepage
  * bugs
  * license
  * author
  * repository
  * etc etc
