import React from "react";
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;    
    width: 512px;
    height: 768px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
   
    display: flex;
    flex-direction: column;
    position: relative;
`

function TodoTemplate({ children }) {
    return (
        <div>
            <TodoTemplateBlock>{children}</TodoTemplateBlock>
        </div>
    );
};

export default TodoTemplate;