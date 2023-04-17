const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile);
// views 엔진등록, ejs파일이 자동으로 html변환 views폴더 생성이 공식
app.use(bodyParser.urlencoded({ extended: false }));

// 패키지를 사용할 하위 파일을 생성
const module1 = require('./router/module1')(app, fs); // express()와 fs()를 전달
// data폴더 : 자료가 저장될 폴더, json파일을 저장하는 폴더
// router폴더 : 라우터 객체를 관리하는 파일을 저장하는 폴더 
// views폴더 : 화면에 랜더링할 파일을 저장하는 폴더
app.listen(port, () => {
  console.log(`${port}번 포트로 서버 실행중...`);
});