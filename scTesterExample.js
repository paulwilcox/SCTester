// In the console, cd to this folder, and 
// type "node scTesterExample.js" 

let testServerExecutor = require('./scTester.js');

let config = {
    testDirectory: './tests',
    port: 8082,
    serverImports: `let distance = require('./sampleLibraries/distanceFunc.server.js');`,
    clientImports: `import distance from '/sampleLibraries/distanceFunc.client.js';`
};

testServerExecutor(config);

