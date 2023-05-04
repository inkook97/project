import React from "react";
import styled from "styled-components";
import { useTodoState } from '../todoContext';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;
    h1{
        margin: 0;
        font-size: 36px;
        color: #343a40; 
    }
    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left{
        color: #20c907;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`

function TodoHead() {
    const todos = useTodoState();
    // useTodoState()컴포넌트 기본값으로 state를 갖고 있음 즉 데이터임
    const undoneTasks = todos.filter(todo => !todo.done);
    // 배열에서 done속성이 false인 요소의 개수

    // 년, 월, 일 설정하는 함수
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    // 요일 지정해주는 함수
    const dayName = today.toLocaleDateString('ko-KR', { 
        weekday: 'long'
    });

    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
};

export default TodoHead;