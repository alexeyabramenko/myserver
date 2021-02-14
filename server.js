const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const arrUrl = [req.url];
    let body = null;
    arrUrl.forEach( url => {
        if (url != 'favicon.ico'){
            body = fs.readFileSync(`./online-store${url}`);
            res.end(body);
        }
    });
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log('Server started!');
console.log(`${port}`);