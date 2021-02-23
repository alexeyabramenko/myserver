const http = require('http');
const fs = require('fs');
const mime = require('mime');
const path = require('path');


const server = http.createServer((req, res) => {
    let filePath = './onlinestore' + req.url
    let body = null;
    try {
        res.setHeader('Content-Type', mime.getType(filePath));
        body = fs.readFileSync(filePath);
        res.end(body);
    } catch (err) {
        body = fs.readFileSync('./onlinestore/index.html');
        res.end(body);
    }
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Server started! Port ${port}`);
