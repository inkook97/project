import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import LogoImg from './images/logo_img.png'; // 이미지를 객체로 저장해서 사용
import Main from './main';
import Footer from './footer';
// 컴포넌트를 라우터객체로 지정해서 화면에 마운트 합니다.
// yarn add react-router-dom@5
// 설정 : 특정 주소에 컴포넌트 연결하는 방법
// <Route path="주소" component={보여줄 컴포넌트}></Route>
// 다룬 주소로 이동시키기
// import { Route, Link } from 'react-router-dom';
// <LInk to="주소">문자</Link>
import Member from './components/member';
import Product from './components/product';
import Market from './components/market';
import Brand from './components/brand';
import Pop from './components/pop';
import Event from './components/event';
import Delivery from './components/delivery';


function App() {
  // 주석처리
  return (
    <>
      <div className='header'>
        <div className='header_in'>
          <div className='logo'>
            <Link to="/"><img src={LogoImg} alt="" /></Link>
            {/* <Link to="/"><img src={require("./images/logo_img.png")} alt="" /></Link> */}
          </div>
          <div className='nav'>
            <ul>
              <li><Link to="/components/member">프리미엄 멤버십</Link></li>
              <li><Link to="/components/product">냉장제품</Link></li>
              <li><Link to="/components/market">시크릿마켓</Link></li>
              <li><Link to="/components/brand">브랜드관</Link></li>
              <li><Link to="/components/pop">기획전</Link></li>
              <li><Link to="/components/event">이벤트</Link></li>
              <li><Link to="/components/delivery">가정배달</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Route path="./main" component={Main}></Route>
        <Route path="/components/member" component={Member}></Route>
        <Route path="/components/product" component={Product}></Route>
        <Route path="/components/market" component={Market}></Route>
        <Route path="/components/brand" component={Brand}></Route>
        <Route path="/components/pop" component={Pop}></Route>
        <Route path="/components/event" component={Event}></Route>
        <Route path="/components/delivery" component={Delivery}></Route>
      </div>
      {/* 배경이미지넣기 */}
      <div className='imgbox'></div>
      
      <Main />
      <Footer />
      {/* 주석처리 */}
    </>
  );
}

export default App;