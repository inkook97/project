const express = require('express');
const cookieParser = require('cookie-parser'); // npm i cookie-parser

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/setCookie', (req, res) => {
    console.log('setCookie 호출');
    res.cookie('member', {
        id: 'apple',
        name: '김사과',
        gender: 'female'
    }, {
        maxAge: 1000 * 60 * 60 // 1초 * 1분 * 1시간
    }); // 쿠키생성
    res.redirect('/showCookie'); // 이동
});

app.get('/showCookie', (req, res) => {
    console.log('showCookie 호출');
    res.send(req.cookies); // 서버에서 사용자에게 전달(화면출력)
    res.end();
});

app.listen(port, () => {
    console.log(`${port}포트로 서버 실행중...`);
});