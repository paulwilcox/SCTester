#!/usr/bin/env node

let fs = require('fs');

let yargs = 
    require('yargs')
    .describe({
        testDirectory: 'The directory containing the test functions.',
        port: 'The port on which to start puppeteer to run client tests.',
        browser: 'Opens up a browser for you to manually run tests',
        suppress: 'suppresses error message output in the console.'
    })
    .number('port')
    .boolean('browser')
    .boolean('suppress')
    .alias({testDirectory: 'td'})
    .default({
        testDirectory: './test',
        port: 8083
    })
    .argv;

let applicationPath = process.cwd(); // user's path
let scTesterTemplate = __dirname + '/scTesterTemplate.js';
let scTesterServer = applicationPath + '/scTesterServer.js';
let serverImports = yargs.testDirectory + '/_imports.s.js';
let clientImports = yargs.testDirectory + '/_imports.c.js';

console.log(`Creating scTesterServer.js from template.`);

let ts = fs
    .readFileSync(scTesterTemplate).toString()
    .replace('__testDirectory__', yargs.testDirectory)
    .replace('__port__', yargs.port)
    .replace('__browser__', yargs.browser)
    .replace(/__suppress__/g, yargs.suppress);

ts = ts.replace(
    '__serverImports__', 
    fs.existsSync(serverImports)
        ? fs.readFileSync(serverImports).toString()
        : ''
);

ts = ts.replace(
    '__clientImports__', 
    fs.existsSync(clientImports)
        ? fs.readFileSync(clientImports).toString()
        : ''
);

let writer = fs.createWriteStream(scTesterServer);
writer.write(ts);
writer.end(() => require(scTesterServer));


