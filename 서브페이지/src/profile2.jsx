import React from "react";

// 객체

const fruitData = {
    apple2: {
        name: '사과2',
        description: '과일, 빨간색'
    },
    banana2: {
        name: '바나나2',
        description: '과일, 노란색'
    }
};


// 함수

const Profile2 = ({ match }) => {
    const { username } = match.params;
    const profile2 = fruitData[username];

    if (!profile2) {
        return <div>존재하지 않는 프로필입니다.</div>
    };

    return (
        <div>
            <h2>
                {username}({profile2.name})
            </h2>
            <p>{profile2.description}</p>
        </div>
    );
};

export default Profile2



