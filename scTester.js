let fs = require('fs');

module.exports = function (config) {

    let ts = fs
        .readFileSync('./scTesterTemplate.js').toString()
        .replace('__testDirectory__', config.testDirectory)
        .replace('__port__', config.port)
        .replace('__serverImports__', config.serverImports)
        .replace('__clientImports__', config.clientImports);

    let writer = fs.createWriteStream('./scTesterServer.js');
    writer.write(ts);
    writer.end(() => require('./scTesterServer.js'));

}