const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method)

    //lodash
    console.log(_.random(1, 9))

    // lodash _.onece() function
    const callMeOnes = _.once(() => {
        console.log('ones')
    })
    callMeOnes();
    callMeOnes();
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