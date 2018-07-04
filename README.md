# Generic TypeScript Library Base Project
Base for minimal library projects with TypeScript and unit tests

Include the following to add test results (e.g.):

[![Build Status](https://travis-ci.org/geekdenz/tree-hof.svg?branch=master)](https://travis-ci.org/geekdenz/tree-hof)

Include the following for a test report in the GitHub repo or your own (e.g.):

### [Test Report](https://github.com/geekdenz/ts-library/blob/master/test-report.md)

## Why?

 * Need a base project for libraries and didn't find one exactly how I wanted it.
 * Prove my understanding of TypeScript and unit testing.
 * Provide a library for other developers to use.

## What?

 * Base library project.
 * Possibly can be used for client side projects/modules.

## How?

```bash
npm i
npm run test       # test if it works
npm run watch:test # continually test, showing output - useful for developing
npm run watch:tsc  # continually compile *.ts files --watch
npm run min        # minify the library/module
```



### NOTE

This is the minimum for a library/module with unit tests in TypeScript and
should get you started quickly on a new TS project.
