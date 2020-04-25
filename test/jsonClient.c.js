async function test () {

    let json = await 
        fetch('./_data.json')
        .then(data => data.json());

    if (json['a'] != 'eigh')
        throw 'json["a"] != "eigh"';

    json = await 
        fetch('./_serveJson.r.js')
        .then(data => data.json());

    if (json['f'] != 'ef')
        throw 'json["f"] != "ef"';

    return true;

}