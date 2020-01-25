#!/usr/bin/env node

let fs = require('fs');
let path = require('path');

let yargs = 
    require('yargs')
    .describe({
        testDirectory: 'The directory containing the test functions.',
        port: 'The port on which to start puppeteer to run client tests.'
    })
    .number('port')
    .default({port: 8083})
    .alias({testDirectory: 'td'})
    .argv;

let applicationPath = path.dirname(require.main.filename);
let scTesterTemplate = __dirname + '/scTesterTemplate.js';
let scTesterServer = applicationPath + '/scTesterServer.js';
let serverImports = yargs.testDirectory + '/_imports.s.js';
let clientImports = yargs.testDirectory + '/_imports.c.js';

console.log(`Creating ${scTesterServer}`);
console.log(`  from ${scTesterTemplate}`);

let ts = fs
    .readFileSync(scTesterTemplate).toString()
    .replace('__testDirectory__', yargs.testDirectory)
    .replace('__port__', yargs.port);

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


