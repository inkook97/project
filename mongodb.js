const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; // npm i mongodb

const app = express();
const router = express.Router();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

let database; // 몽고디비 연결 객체
// mongodb 연결 함수
function connectDB() {
    const databaseURL = 'mongodb://localhost:27017' // 몽고디비 프로토콜
    MongoClient.connect(databaseURL, (err, db) => {
        if (!err) {
            const tempdb = db.db('fontenddb0419'); // 접근하고자 하는 데이터베이스 이름  
            database = tempdb;
            console.log('몽고디비 연결 성공');
        } else {
            console.log(err);
        };
    });
};


app.use('/', router);

app.listen(port, () => {
    console.log(`${port}포트로 서버 동작중...`);
    connectDB(); // 서버 실행시 바로 몽고디비 연결 함수 호출
});