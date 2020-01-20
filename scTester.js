let fs = require('fs');
let path = require('path');

module.exports = function (config) {

    let applicationPath = path.dirname(require.main.filename);
    let scTesterTemplate = __dirname + '/scTesterTemplate.js';
    let scTesterServer = applicationPath + '/scTesterServer.js';

    console.log(`Creating ${scTesterServer}`);
    console.log(`  from ${scTesterTemplate}`);

    let ts = fs
        .readFileSync(scTesterTemplate).toString()
        .replace('__testDirectory__', config.testDirectory)
        .replace('__port__', config.port)
        .replace('__serverImports__', config.serverImports)
        .replace('__clientImports__', config.clientImports);

    let writer = fs.createWriteStream(scTesterServer);
    writer.write(ts);
    writer.end(() => require(scTesterServer));

}



