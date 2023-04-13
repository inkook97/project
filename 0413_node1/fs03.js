const fs = require('fs');

fs.readFile('text1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('에러발생! / 비동기');
    } else {
        console.log(data);
    };
});

try {
    const text = fs.readFileSync('text1.txt', 'utf-8'); // 동기
    console.log(`동기식으로 읽음 : ${text}`);
} catch (e) {
    console.log('에러발생! / 동기');
};