const http = require('http');
const host = 'localhost';
const port = 8000;

const requestLinstener = function(req, res) {
    res.writeHead(200);
    res.end('Hello World\n');
};

const server =  http.createServer(requestLinstener);
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});