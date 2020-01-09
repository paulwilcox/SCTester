let testServerExecutor = require('./testServerExecutor.js');

let config = {
    testDirectory: './example',
    port: 8082,
    serverImports: `let math = require('math.js');`,
    clientImports: `import math from '/node_modules/math.js/index.js';`
};

testServerExecutor(config);

