import React, { useState } from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import { MdCatchingPokemon, MdPortableWifiOff, MdFingerprint, MdRocketLaunch } from "react-icons/md";
import CheckBox from './checkbox';

// div말고 input이나 다른 태그도 가능함 태그스타일 지정해주는거임
const Box = styled.div` 
  width: 500px;
  height: 300px;
  background-color: yellow;
  font-size: 200px;
  color: blue;
`;
const Btn = styled.button`
  margin-top: 40px;
  width: 200px;
  height: 120px;
  background-color: yellowgreen;

  &:hover{
    background-color: red;
  }
`;
const Circle = styled.div`
  margin: 30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  // background-color: black;
  background-color: ${props => props.color || 'black'};

  // 스타일 새롭게 추가 props에 따라서 적용이 되지만 상단에 설정부분이 있음
  // import styled, {css} from 'styled-components; {css}를 추가
  ${props =>
    props.big && css`
  width: 200px;
  height: 200px;
  `
  };
  `;

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked)
  };


  return (
    <div>
      <Box>
        <MdPortableWifiOff style={{ color: 'red' }} />
        <MdRocketLaunch />
      </Box>
      <Btn />
      <div style={{ fontSize: '100px', color: 'gray' }}>
        <MdFingerprint />
        <MdCatchingPokemon />
      </div>
      <Circle />
      <Circle color="deeppink" />
      <Circle color="skyblue" big />
      <hr />
      <CheckBox onChange={onChange} checked={check}>
        약관에 모두 동의
      </CheckBox>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
