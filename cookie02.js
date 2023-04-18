const express = require('express');
const cookieParser = require('cookie-parser'); // npm i cookie-parser
const bodyparser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser('!@$%^&***(&*&'));

// 로그인 127.0.0.1:3000/login
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

// 로그인이 성공했을때 127.0.0.1:3000/loginOk
app.post('/loginOk', (req, res) => {
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    console.log(userid);
    console.log(userpw);

    // admin / 1234
    if (userid == 'admin' && userpw == '1234') {
        // 쿠키정보생성
        const expiresDay = new Date(Date.now() + (1000 * 60 * 60 * 24));
        res.cookie('userid', userid, { expires: expiresDay, signed: true });
        res.redirect('/main'); // 로그인 성공시 라우터객체로 이동
    } else {
        res.redirect('/fail'); // 로그인 실패시 라우터객체로 이동
    };
});

// 로그인이 성공했을때 보여질 페이지 127.0.0.1:3000/main
app.get('/main', (req, res) => {
    const cookieUserid = req.signedCookies.userid;
    if (cookieUserid) { // 쿠키정보가 있는지 확인
        fs.readFile('main.html', 'utf-8', (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        });
    } else {
        res.redirect('/login');
    }
});

// 로그인이 실패했을때 127.0.0.1:3000/fail
app.get('/fail', (req, res) => {
    fs.readFile('fail.html', 'utf-8', (err, data) => {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(data);
    });
});

// 로그인아웃이 되었을때 127.0.0.1:3000/logout
app.get('/logout', (req, res) => {
    res.clearCookie('userid');
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`${port}포트로 서버 실행중...`);
});