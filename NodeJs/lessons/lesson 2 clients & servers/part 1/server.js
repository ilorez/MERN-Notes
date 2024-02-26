const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader('content-type', 'text/html');
    res.write('<body >');
    res.write('<p>hello world</p><br>');

    res.write('<h1>hello world</h1>');
    res.write('<h2>HI</h2></body>');
    res.end()
});

server.listen(3000, 'localhost', () => {
    console.log('lisening for request on port 3000')
});