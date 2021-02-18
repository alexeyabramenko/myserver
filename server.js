const http = require('http');
const fs = require('fs');
const mime = require('mime');
const path = require('path');


const server = http.createServer((req, res) => {
    let filePath = './onlinestore' + req.url
    try {
        if (req.url === '/favicon.ico') {
            console.log(req.url);
            res.setHeader('Content-Type', 'image');
            fs.createReadStream('./onlinestore/favicon.ico').pipe(res);
        }
        res.setHeader('Content-Type', mime.getType(filePath));
        fs.createReadStream(filePath).pipe(res);
    } catch (err) {
        fs.createReadStream('./onlinestore/index.html').pipe(res);
    }
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Server started! Port ${port}`);
