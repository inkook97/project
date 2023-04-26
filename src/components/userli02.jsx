import React from "react";

function Marvel({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
};

function UserList2() {
    const Marvels = [
        {
            id: 1,
            username: '아이언맨',
            email: 'Ironman@Ironman.com'
        },
        {
            id: 2,
            username: '헐크',
            email: 'Hulk@Hulk.com'
        },
        {
            id: 3,
            username: '닥터스트레인지',
            email: 'DoctorStrange@DoctorStrange.com'
        },
        {
            id: 4,
            username: '토르',
            email: 'Thor@Thor.com'
        },
        {
            id: 5,
            username: '비전',
            email: 'Vision@Vision.com'
        },
    ];

    return (
        <div>
            {Marvels.map((user, index) => (
                <Marvel user={user} key={index} />
            ))}
        </div>
    )
}

export default UserList2;