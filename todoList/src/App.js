import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/todoTemplate';
import TodoHead from './components/todoHead';
import TodoList from './components/todoList';
import TodoCreate from './components/todoCreate';
import { TodoProvider } from './todoContext';
// import styled from 'styled-components';
// yarn add styled-components
// yarn add react-icons

// 전역으로 사용하는 컴포넌트를 생성, 즉 index.css를 내부에서 선언
const GlobalStyle = createGlobalStyle`
  body{
    23년 5월 2일
    화요일
    할 일 2개 남음
    프로젝트 생성하기
    background-color: #e9ecef;
  }
`

function App() {
  return (
    <>
      {/* 특정값을 적용하기 위한 범위를 설정하는 컴포넌트 */}
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
};

export default App;
