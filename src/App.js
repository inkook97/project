import React, { useState } from 'react';
import './App.css';
// import Counter from './components/counter';
// import Input from './components/input';
// import MultiInput from './components/multiInput';
// import UserList from './components/userli';
// import UserList2 from './components/userli02';
//--------------------------------------------------
import UserList from './components/userList';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: '김사과',
      email: 'apple@apple.com',
      // active: true
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
  ]);


  const onToggle = (id) => {
    setUsers(
      users.map(user => user.id === id ? { ...user, active: !user.active } : user)
      // user.active=(user.id===id ? (!users.active) : user.active);
      // return user;
    );
    // map()의 사용은 배열의 불변성을 유지하면서 배열을 업데이트하기 위해 사용
    // ...user :active속성이 들어간 user들(배열) -> active속성이 적용
    // active: 속성을 의미
    // !user.active : 다른 user의 속성을 의미하고 !속성이 없다는 부정을 의미
  };
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  return (
    <div>
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <MultiInput /> */}
      {/* <UserList /> */}
      {/* <UserList2 /> */}
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
    </div>
  )
}

export default App;
