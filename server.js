const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const arrUrl = [req.url];
    arrUrl.forEach( url => {
        let body = fs.readFileSync(`./online-store${url}`);
        res.end(body);
        
    });
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log('Server started!');
console.log(`${port}`);
