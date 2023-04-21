const express = require('express');
const bodyParser = require('body-parser');
// npm i morgan
const logger = require('morgan');
// npm i mongoose
const mongoose = require('mongoose');

const port = 3000;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));

// 데이터베이스 연결
let database;
let UserSchema;
let UserModel;

function connectDB() {
    const url = "mongodb://127.0.0.1:27017/fontenddb0419";
    console.log('데이터베이스 연결  시도중 ...');

    mongoose.Promise = global.Promise;
    // 몽구스의 프로미스 객체를 global의 프로미스 객체
    // 동기식이더라도 비동기식으로 사용

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    database = mongoose.connection; // 기본 몽고디비에서 몽고즈를 적용시킨 데이터베이스
    // 데이터베이스 연결상태를 예외처리
    database.on('error', console.error.bind(console, "mongoose 연결 실패!"));
    database.on('open', () => {
        console.log('데이터베이스 연결 성공');
        // 스키마 -> 데이터베이스의 제약조건
        UserSchema = mongoose.Schema({
            userid: String,
            userpw: String,
            username: String,
            gender: String
        });
        console.log('UserSchema 생성 완료!');

        // 가상의 함수를 생성 list 생성시 사용 -> 스키마 생성되었을때 데이터
        UserSchema.static('findAll', function (callback) {
            return this.find({}, callback);
        });

        // 모델 -> 데이터 구조 설정
        UserModel = mongoose.model('user', UserSchema);
        // 현재 모델은 스키마의 구조를 그대로 상속받아서 사용한다는 정의
        console.log('UserModel이 정의되었습니다.');
    });
};
// 회원가입
// 127.0.0.1:3000/user/regist (post)
router.route('/user/regist').post((req, res) => {
    console.log('/user/regist 호출!');
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    const username = req.body.username;
    const gender = req.body.gender;
    // 확인
    console.log(`userid:${userid}, userpw:${userpw}, username:${username}, gender:${gender}`);

    if (database) {
        joinUser(database, userid, userpw, username, gender, (err, result) => {
            if (!err) {
                if (result) {
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf-8' });
                    res.write('<h2>회원가입 성공</h2>');
                    res.end();
                } else {
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf-8' });
                    res.write('<h2>회원가입 실패</h2>');
                    res.end();
                };
            } else {
                res.writeHead('200', { 'content-type': 'text/html; charset=utf-8' });
                res.write('<h2>서버에러! 회원가입 실패</h2>');
                res.end();
            };
        });
    } else {
        res.writeHead('200', { 'content-type': 'text/html; charset=utf-8' });
        res.write('<h2>데이터베이스 연결실패</h2>');
        res.end();
    };
});

// 로그인
// localhost:3000/user/login (post)

// 리스트
// localhost:3000/user/list (get)


//----------------------------------------------------------------------------------------------

const joinUser = function (database, userid, userpw, username, gender, callback) {
    console.log('joinUser 호출!');
    // 모델에 맞게 데이터 입력
    const users = new UserModel({ userid: userid, userpw: userpw, username: username, gender: gender });

    users.save((err, result) => {
        if (!err) {
            console.log('회원 document가 추가되었습니다.');
            callback(null, result);
            return;
        };
        callback(err, null);

    });
};























app.use("/", router);
app.listen(port, () => {
    console.log(`${port}포트로 서버 연결중...`);
    connectDB();
});