let fs = require('fs');
let path = require('path');

module.exports = function (config) {

    let applicationPath = path.dirname(require.main.filename);
    let scTesterTemplate = __dirname + '/scTesterTemplate.js';
    let scTesterServer = applicationPath + '/scTesterServer.js';
    let serverImports = config.testDirectory + '/_imports.s.js';
    let clientImports = config.testDirectory + '/_imports.c.js';

    console.log(`Creating ${scTesterServer}`);
    console.log(`  from ${scTesterTemplate}`);

    let ts = fs
        .readFileSync(scTesterTemplate).toString()
        .replace('__testDirectory__', config.testDirectory)
        .replace('__port__', config.port);

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

}



