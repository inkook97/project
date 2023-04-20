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




// 회원가입
// http://localhost:3000/member/regist (post)
router.route('/member/regist').post((req, res) => {
    console.log('/member/regist 호출!');
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    const username = req.body.username;
    const age = req.body.age;

    // 입력한 정보확인 
    console.log(`userid:${userid}, userpw:${userpw}, username:${username}, age:${age}`);

    if (database) {
        // 콜백함수
        joinMember(database, userid, userpw, username, age, (err, result) => {
            if (!err) {
                res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                res.write('<h2>회원가입 성공</h2>');
                res.write('<p>가입이 성공적으로 완료되었습니다..</p>');
                res.end();
            } else {
                res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                res.write('<h2>회원가입 실패</h2>');
                res.write('<p>가입이 실패 되었습니다..</p>');
                res.end();
            };
        });
    } else {
        res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.write('<p>mongodb 데이터베이스에 연결하지 못했습니다.</p>');
        res.end();
    };
});

// 로그인
// http://localhost:3000/member/login (post)
router.route('/member/login').post((req, res) => {
    console.log('/member/login 호출!');
    const userid = req.body.userid;
    const userpw = req.body.userpw;

    // 입력한 정보 확인
    console.log(`userid:${userid}, userpw:${userpw}`);

    if (database) {
        loginMember(database, userid, userpw, (err, result) => {
            if (!err) {
                // 프로그램 오류는 없지만 실제로 데이터가 없는 경우
                if (result) {
                    console.dir(result); // 정보전달
                    // 정상적으로 처리된 정보를 임시로 저장
                    const resultUserid = result[0].userid;
                    const resultUserpw = result[0].userpw;
                    const resultName = result[0].username;
                    const resultAge = result[0].age;

                    // 화면에 출력  
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                    res.write('<h2>로그인 성공</h2>');
                    res.write(`<p>${resultUserid}(${resultName})님 환영합니다.</p>`);
                    res.write(`<p>나이 : ${resultAge}살</p>`);
                    res.end();
                } else {
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                    res.write('<h2>로그인 실패</h2>');
                    res.write('<p>아이디 또는 비밀번호를 확인하세요.</p>');
                    res.end();
                };
            } else {
                res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                res.write('<h2>로그인 실패</h2>');
                res.write('<p>서버오류발생, 로그인 실패했습니다.</p>');
                res.end();
            };
        });

    } else {
        res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.write('<p>mongodb 데이터베이스에 연결하지 못했습니다.</p>');
        res.end();
    };
});

// 정보 수정
// http://localhost:3000/member/edit (post)
router.route('/member/edit').post((req, res) => {
    console.log('/member/edit 호출!');
    // 수정할 정보 임시저장
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    const username = req.body.username;
    const age = req.body.age;

    // 입력한 정보확인
    console.log(`userid:${userid}, userpw:${userpw}, username:${username}, age:${age}`);

    if (database) {
        editMember(database, userid, userpw, username, age, (err, result) => {
            if (!err) {
                if (result.modifiedCount > 0) {
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                    res.write('<h2>회원정보 수정 성공</h2>');
                    res.write('<p>회원정보 수정에 성공 했습니다..</p>');
                    res.end();
                } else {
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                    res.write('<h2>회원정보 수정 실패</h2>');
                    res.write('<p>회원정보 수정에 실패 했습니다.</p>');
                    res.end();
                }

            } else {
                res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                res.write('<h2>회원정보 수정 실패</h2>');
                res.write('<p>서버 오류 발생 정보 수정에 실패 했습니다.</p>');
                res.end();
            }
        });
    } else {
        res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.write('<p>mongodb 데이터베이스에 연결하지 못했습니다.</p>');
        res.end();
    };
});


// 회원 삭제
// http://localhost:3000/member/delete (post)
router.route('/member/delete').post((req, res) => {
    console.log('/member/delete 호출!');

    const userid = req.body.userid;
    console.log(`userid:${userid}`);


    // 데이터베이스 연결 여부 1-1
    // 데이터베이스에서 데이터를 처리하는 부분의 예외처리 1-2
    // 실제 데이터 변화가 생기는 것에 대해 예외처리 1-3
    // 콜백함수에서 실제 실행에 대한 예외처리 2-1

    if (database) {
        deleteMember(database, userid, (err, result) => {
            if (!err) {
                if (result.deletedCount > 0) {
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                    res.write('<h2>데이터베이스 삭제 성공</h2>');
                    res.write('<p>회원정보 삭제에 성공했습니다.</p>');
                    res.end();
                } else {
                    res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                    res.write('<h2>데이터베이스 삭제 실패</h2>');
                    res.write('<p>회원정보 삭제에 실패했습니다.</p>');
                    res.end();
                }
            } else {
                res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
                res.write('<h2>데이터베이스 삭제 실패</h2>');
                res.write('<p>회원정보 삭제에 실패했습니다.</p>');
                res.end();
            };
        });
    } else {
        res.writeHead('200', { 'content-type': 'text/html; charset=utf8' });
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.write('<p>mongodb 데이터베이스에 연결하지 못했습니다.</p>');
        res.end();
    };
});




// -------------------------------------------------------------------------------

const joinMember = function (database, userid, userpw, username, age, callback) {
    console.log('jpinMember 호출!');
    // 특정 collections 선택하고 객체명 지정
    const members = database.collection('member');

    // insertMany : 기본이 배열 몽고디비에 데이터 입력하는 메소드
    members.insertMany([{ userid: userid, userpw: userpw, username: username, age: age }], (err, result) => {
        if (!err) {
            // insertMany 카운트 -> insertedCount
            if (result.insertedCount > 0) {
                console.log(`사용자 document ${result.insertedCount}명 추가 되었음!`);
            } else {
                console.log('사용자 document 추가되지 않음!');
            };
            callback(null, result);
            return;
        } else {
            console.log(err);
            callback(err, null);
        };
    });
};


const loginMember = function (database, userid, userpw, callback) {
    console.log('jpinMember 호출!');
    // 특정 collections 선택하고 객체명 지정
    const members = database.collection('member');

    // find() : 데이터베이스에서 데이터 찾기 메소드
    // toArray() : 검색하는 데이터는 하나를 찾더라도 여러개의 의미를 둠
    // length : 검색된 데이터 개수
    members.find({ userid: userid, userpw: userpw }).toArray((err, result) => {
        if (!err) {
            // 프로그램상에 오류는 없지만 데이터가 없을경우
            if (result.length > 0) {
                console.log('사용자를 찾았습니다.');
                callback(null, result);
            } else {
                console.log('일치하는 사용자가 없습니다.');
                callback(null, null);
            }
            return;
        } else {
            console.log(err);
            callback(err, null);
        };
    });
};



const editMember = function (database, userid, userpw, username, age, callback) {
    console.log('editMember 호출');
    const members = database.collection('member');

    // members.updateOne({키값}, {$set{정보}});
    // updateOne()를 사용시 modifiedCount가 발생 -> 실제 데이터 수정 상황을 확인
    members.updateOne({ userid: userid }, { $set: { userid: userid, userpw: userpw, username: username, age: age } }, (err, result) => {
        if (!err) {
            if (result.modifiedCount > 0) {
                console.log(`사용자 document ${result.modifiedCount}명 수정됨`);
            } else {
                console.log('수정된 document 없음');
            };
            callback(null, result);
            return;
        } else {
            console.log(err);
            callback(err, null);
        };
    });
};

const deleteMember = function (database, userid, callback) {
    console.log('deletedMember 호출!');
    const members = database.collection('member');

    // deleteOne({키값}) : 정보삭제
    // deleteOne({키값})을 실행하면 deletedCount가 발생
    members.deleteOne({ userid: userid }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                console.log(`사용자 document ${result.deletedCount}명 삭제됨`);
            } else {
                console.log('삭제된 document 없음');
            }
            callback(null, result);
            return;
        } else {
            console.log(err);
            callback(err, null);
        };
    });
};