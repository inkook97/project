import React from "react";

// 함수 표현식

const History = ({ history }) => {
    const goBack = () => { // 이전 라우트로 이동
        history.goBack();
    }
    const goHome = () => { // history함수를 활용해서 첫화면으로 이동
        history.push('/');
    };
    return (
        <div>
            <h1>History</h1>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );
};

export default History;