import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import History from './history';
import Profiles from './profiles';
import Profiles2 from './profiles2';
import About from './about.jsx';
import SubPage from './subPage';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/profiles2">과일 이름</Link>
        </li>
        <li>
          <Link to="/subPage">서브페이지 목록</Link>
        </li>
        <li>
          <Link to="/history">history 예제</Link>
        </li>
      </ul>
      <hr />
      <div>
        {/* 기본 라우터객체 연결은 exact={true} 선언합니다. */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/profiles2" component={Profiles2} />
        <Route path="/subPage" component={SubPage} />
        <Route path="/history" component={History} />
      </div>
    </div>
  );
};

export default App;
