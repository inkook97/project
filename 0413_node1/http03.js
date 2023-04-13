const http = require('http');
const fs = require('fs');

// 이미지 서버
http.createServer((req, res) => {
    fs.readFile('node.png', (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'image/png' });
            res.end(data);
        } else {
            console.log('이미지서버실행중...');
        }
    });
}).listen(3000, () => {
    console.log('이미지 서버 실행중...');
});

// 사운드 서버
http.createServer((req, res) => {
    fs.readFile('sunny.mp3', (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'audio/mp3' });
            res.end(data);
        } else {
            console.log('사운드 서버 실행중...');
        }
    });
}).listen(3001, () => {
    console.log('사운드 서버 실행중...');
});