var http = require('http');
var da = require('./src/script/db-access.js');

// Start HTTP Server
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Under construction...");
}).listen(8080);