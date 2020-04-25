

function serve (request, response) {

    let data = JSON.stringify({
        "e": "eee",
        "f": "ef"
    });

    response.writeHead(200, { 'Content-Type': 'text/json' });
    response.end(data, 'utf-8');    

}