const http = require('http');

http.createServer((resq, resp) => {
    console.log(resq);
    resp.writeHead(404);
    
    resp.write('404 | Page not found');
    resp.end();

}).listen(8085);

console.log('escuchando el puerto 8085')