const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const body = fs.readFileSync(`./online-store${req.url}`);
    res.end(body);
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log('Server started!');
console.log(`${port}`);
