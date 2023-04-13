const http = require('http');
const fs = require('fs');
// 127.0.0.1 node의 기본주소 암기

http.createServer((req, res) => {
    fs.readFile('test.html', (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        } else {
            console.log(err);
        }
    });
}).listen(3000, () => {
    console.log('서버 실행중...');
});