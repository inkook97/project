import React from "react";
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
};

function UserList() {
    const users = [
        {
            id: 1,
            username: '김사과',
            email: 'apple@apple.com'
        },
        {
            id: 2,
            username: '오렌지',
            email: 'orange@orange.com'
        },
        {
            id: 3,
            username: '반하나',
            email: 'banana@banana.com'
        },
        {
            id: 4,
            username: '이메론',
            email: 'melon@melon.com'
        },
        {
            id: 5,
            username: '배애리',
            email: 'berry@berry.com'
        }
    ];


    return (
        <div>
            {/*
             배열명.map()=> 배열갯수만큼 반복해서 보임
             배열명.filter(조건)=> 조건식이 참인 배열요소만 보임
            */}
            {/* 
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
            <User user={users[3]} />
            <User user={users[4]} /> 
            */}
            {users.map((user, index) => (
                <User user={user} key={index} /> // key값을 주는이유 => id값을 겹치지 않게 하기 위해서임
                // <User user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UserList;