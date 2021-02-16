const http = require('http');
const fs = require('fs');
const mime = require('mime');
const path = require('path');


const server = http.createServer((req, res) => {
    let filePath = './' + req.url
    res.setHeader('Content-Type', mime.getType(filePath));
    fs.createReadStream(filePath).pipe(res);
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Server started! Port ${port}`);
