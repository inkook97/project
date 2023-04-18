const e = require("express");

module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        res.render('index.ejs', { length: 10 });
    });

    app.get('/about', (req, res) => {
        res.render('about.html');
    });

    // http://localhost:3000/list
    app.get('/list', (req, res) => {
        fs.readFile(__dirname + '/../data/member.json', 'utf-8', (err, data) => {
            if (!err) {
                console.log(data);
                res.writeHead(200, { 'content-type': 'text/json; charset=utf8' });
                res.end(data);
            } else {
                console.log(err);
            }
        });
    });


    // http://localhost:3000/getMember/apple
    app.get('/getMember/:userid', (req, res) => {
        fs.readFile(__dirname + "/../data/member.json", "utf-8", (err, data) => {
            if (!err) {
                const member = JSON.parse(data);
                // JSON형식으로 불러옴 이렇게 안하면 글자형으로 갖고 오기때문
                res.json(member[req.params.userid]);
                // 요청하는 userid를 json파일에서 조건으로 지정
            } else {
                console.log(err);
            };
        });
    });

    // 회원가입 
    // http://localhost:3000/joinMember/apple1 추가
    app.post('/joinMember/:userid', (req, res) => {
        const result = {}; // 실제로 데이터를 입력 요소가 수정되는건 상관없음, 데이터의 상태를 저장하는 공간
        const userid = req.params.userid;

        // 조건으로 선택된 내용이 없다면 실행중지
        if (!req.body["password"] || !req.body["name"]) {
            result["success"] = 100; // 실패
            result["msg"] = "매개변수가 전달되지 않음";
            res.json(result);
            return false; // 더이상 진행이 안되게 불러왔던 곳으로 이동
        };


        fs.readFile(__dirname + '/../data/member.json', 'utf-8', (err, data) => {
            const member = JSON.parse(data);
            // 아이디 중복검사
            if (member[userid]) {
                result["success"] = 101; // 101 : 검색
                result["msg"] = "중복된 아이디";
                res.json(result);
                return false;
            };
            console.log(req.body); // 확인

            member[userid] = req.body; // 아이디 패스워드
            fs.writeFile(__dirname + '/../data/member.json', JSON.stringify(member, null, '\t'), 'utf-8', (err, data) => {
                if (!err) {
                    result["success"] = 200;
                    result["msg"] = "성공";
                    res.json(result);
                } else {
                    console.log(err);
                };
            });
        });

    });

    // 회원수정
    // http://localhost:3000/updateMember/apple1
    app.put('/updateMember/:userid', (req, res) => {
        const result = {};
        const userid = req.params.userid; // 요청한 변수의 값을 userid라는 공간에 지정

        if (!req.body["password"] || !req.body["name"]) {
            result["success"] = 100;
            result["msg"] = "매개변수가 전달되지 않음";
            res.json(result);
            return false;
        }

        // 저장된 데이터를 읽기
        fs.readFile(__dirname + "/../data/member.json", "utf-8", (err, data) => {
            if (!err) {
                // 데이터 쓰기
                const member = JSON.parse(data); // JSON파일로 저장
                member[userid] = req.body; // 전달한 정보 name, password
                fs.writeFile(__dirname + "/../data/member.json", JSON.stringify(member, null, '\t'), 'utf-8', (err, data) => {
                    if (!err) {
                        result["success"] = 200;
                        result["msg"] = "성공";
                        res.json(result);
                    } else {
                        console.log(err);
                    };
                });
            } else {
                console.log(err);
            };
        });
    });

    // 회원정보 삭제
    // http://localhost:3000/deleteMember/apple1
    app.delete('/deleteMember/:userid', (req, res) => {
        let result = {};
        fs.readFile(__dirname + '/../data/member.json', 'utf-8', (err, data) => {
            const member = JSON.parse(data);
            // 삭제할 데이터가 있는지 확인
            if (!member[req.params.userid]) {
                result["success"] = 102;
                result["msg"] = "사용자를 찾을 수 없음";
                res.json(result);
                return false;
            }
            delete member[req.params.userid]; // 데이터 삭제
            fs.writeFile(__dirname + '/../data/member.json', JSON.stringify(member, null, '\t'), 'utf-8', (err, data) => {
                result["success"] = 200;
                result["msg"] = "성공";
                res.json(result);
            });
        });
    });
};