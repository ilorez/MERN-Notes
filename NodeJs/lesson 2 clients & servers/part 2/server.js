const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url)
    switch (req.url) {
        case '/':
            path = './data/page.html';
            res.statusCode = 200;
            break;
        case '/home':
            res.statusCode = 301;
            res.setHeader('Location', '/');
            res.end()
            break;
        case "/about":
            path = './data/about.html';
            res.statusCode = 200;

            break;

        default:
            path = './data/404.html';
            res.statusCode = 404;

            break;
    }

    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.end()
        }
        res.write(data)
        // console.log(data)
        res.end()
    })

});

server.listen(3000, 'localhost', () => {
    console.log('lisening for request on port 3000')
});