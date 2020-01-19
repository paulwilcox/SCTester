let fs = require('fs');

module.exports = function (config) {

    let scTesterTemplate = __dirname + '/scTesterTemplate.js';
    let scTesterServer = './scTesterServer.js';
    
    console.log(`Creating ${scTesterServer}`);
    console.log(`  from ${scTesterTemplate}`)

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



