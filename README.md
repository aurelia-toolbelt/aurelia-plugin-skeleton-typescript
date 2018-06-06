
![Imgur](https://i.imgur.com/xVO5NYd.png)

# Aurelia plugin skeleton with Typescript

Certainly happened to you that you want to write an Aurelia plug-in. If yes this is for you :)

This plugin system created based on:
1. [Typescript](https://www.typescriptlang.org/) as a typed superset of JavaScript that compiles to plain JavaScript.
2. [FuseBox](https://github.com/fuse-box/fuse-box) as a bundler/module loader for the **sample**
3. [Jest](https://facebook.github.io/jest/) as delightful JavaScript testing.
4. [Puppeteer](Puppeteer) as headless Chrome for E2E testing.
5. [FuseBox Typechecker](https://github.com/fuse-box/fuse-box-typechecker) as a simple helper to do typechecking.

### How to build and run sample
* ```npm run watch```
* ```npm run build``` 

### How to rename to your own plugin
* ```npm run setup```
  * anwser the questions about name and version
  * then run one of the above-mentioned scripts :smile:
  
### How to test our functionalities

* ```npm run unitTest```
  * for unit testing with Jest.
* ```npm run unitTestWatch```
  * for unit testing with Jest in watch mode.
* ```npm run unitTestCoverage```
  * for unit testing with Jest with test coverage info.
  
### How to test as user perspective (E2E)

* ```npm run e2eTest```
  * You should be sure your app is up and running on `http://localhost:4444` then use the command.
