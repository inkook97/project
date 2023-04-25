import React from 'react';
import './App.css';
import Hello from './components/hello';
import Wrapper from './components/wrapper';

function App() {
  const style = {
    backgroundColor: 'deepskyblue',
    color: 'white',
    fontSize: 40,
    padding: '1rem'
  };
  const name = 'apple';

  return (
    <div>
      <Wrapper>
        <div style={style}>hello!!</div>
        <div className='skyblue-box'>{name}</div>
        <Hello name='apple' color='gold' isSpecial={true} />
        <Hello name='banana' color='yellowgreen' />
        <Hello />
      </Wrapper>
    </div>
  );
};

export default App;
