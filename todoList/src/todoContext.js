import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
    {
        id: 1,
        text: '프론트엔드 프로젝트 만들기',
        done: false
    },
    {
        id: 2,
        text: '밥 잘 챙겨먹기',
        done: false
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

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);

        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo);

        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);

        default:
            throw new Error(`${action.type}이 잘못 전달됨`)
    };
};

// cerateContext() 선언, 데이터 사용하기 위한 범위를 설정하는 컴포넌트 선언
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {

    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5); // 최초 데이터를 추가할때 아이디값

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

// export는 여러개를 내보낼수있음
// default는 하나만 보낼수있음
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
};

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
};

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
};