import React from "react";

const initialTodos = [
    {
        id: 1,
        text: '프론트엔드 프로젝트 만들기',
        done: false
    },
    {
        id: 2,
        text: '밥 잘 챙겨먹기',
        done: true
    },
    {
        id: 3,
        text: '운동하기',
        done: true
    },
    {
        id: 4,
        text: '일기쓰기',
        done: false
    }
];

export function TodoProvider({ children }) {
    return (
        <div>{children}</div>
    );
};