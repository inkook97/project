const express = require('express');
const bodyparser = require('body-parser'); // post에서 정보를 받는 기능을 위한 패키지
const fs = require('fs');
const expressSession = require('express-session'); // npm i express-session

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: false }));
// 쿠키설정
app.use(expressSession({
    secret: '!@#$%^&*()',
    resave: false,
    saveUninitialized: true
}));

// 로그인 시작
// 127.0.0.1:3000/login
app.get('/login', (req, res) => {
    fs.readFile('login.html', 'utf-8', (err, data) => {
        if (!err) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        } else {
            console.log(err);
        };
    });
});


// 로그인에서 정보를 받았을때(세션정보)
// 127.0.0.1:3000/loginOk
app.post('/loginOk', (req, res) => {
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    // 확인
    console.log(userid);
    console.log(userpw);

    // admin, 1234 정보를 세션으로 저장
    if (userid == 'admin' && userpw == '1234') {
        req.session.member = {
            id: userid,
            userpw: userpw,
            isauth: true
        }
        res.redirect('/welcome');
    } else {
        res.redirect('/fail');
    };
});

// 로그인 성공
// 127.0.0.1:3000/welcome
app.get('/welcome', (req, res) => {
    // 세션정보가 있는지 확인
    if (req.session.member) {
        fs.readFile('main.html', 'utf-8', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        });
    }
});

// 로그인 실패
// 127.0.0.1:3000/fail
app.get('/fail', (req, res) => {
    fs.readFile('fail.html', 'utf-8', (err, data) => {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(data);
    });
});

// 로그아웃할때
// 127.0.0.1:3000/logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => { // 세션정보삭제
        console.log('세션이 삭제되었습니다.');
    });
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`${port}포트로 서버 실행중...`);
});