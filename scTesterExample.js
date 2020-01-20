// In the console, cd to this folder, and 
// type "node scTesterExample.js" 

let testServerExecutor = require('./scTester.js');

let config = {
    testDirectory: './tests',
    port: 8082
};

testServerExecutor(config);

