import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useItemState } from "../context";
import styles from "./brand.css"

//분류별
function BrandItem1({ item }) {
    if (item.brand1) {
        return (
            <div>
                <div>
                    <span>※냉장</span>
                </div>
                <img src={item.src} />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
            </div>
        )
    }
}
//이름별
function BrandItem2({ item }) {
    if (item.brand2) {
        return (
            <div>
                <div>
                    <span>※냉장</span>
                </div>
                <img src={item.src} />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
            </div>
        )
    }
}

function Brand() {
    const items = useItemState();

    return (
        <div>
            <div className="subimg" style={{ width: '100%', height: '200px', backgroundColor: '#fff' }}>
                <div className="subimg_in">
                    <p><a href=""><span>img</span> Home > 브랜드</a></p>
                    <h2>브랜드</h2>
                </div>
            </div>
            <div className="contents">
                <div style={{
                    margin: '0 auto',
                    width: '1100px',
                    height: '3900px',
                    backgroundColor: '#fff'
                }} id='brand_tab'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="분류별">
                            <ul className="brand_tab_menu">
                                <li className="tab_li">분유</li>
                                <li className="tab_li">아기간식/이유식</li>
                                <li className="tab_li">냉장제품</li>
                                <li className="tab_li">단백질보충제/영양식</li>
                                <li className="tab_li">두유/우유/물/음료</li>
                                <li className="tab_li tap6">커피/차</li>
                                <li>가정배달</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <h3>분유</h3>
                            <ul className="brand_list">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">365일 자연방목 3%미만 한정생산</span>
                                    <span className="bl-title">유기농산양</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">아기의 성장 단계별 영양설계</span>
                                    <span className="bl-title">아기사랑수</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/b5183af1-b762-438b-8ce4-a81b0c5f822b.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">민감한 아기를 위한</span>
                                    <span className="bl-title">컴포트케어</span>
                                </li>
                            </ul>
                            <h3>아기간식/이유식</h3>
                            <ul className="brand_list">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2022/202208/cce13fe0-c516-4644-a914-9a9e230134fc.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">한 번 더 생각한 우리아이 안심먹거리</span>
                                    <span className="bl-title">아이꼬야</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2022/202208/abc013ea-2ead-453b-9ceb-4363f5f789ea.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">품질검사도 영양성분도 한 수 위!</span>
                                    <span className="bl-title">아인슈타인</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2022/202208/47176eb5-5d5c-4945-b1f0-26eb4fbdd5ad.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">엄마의 마음으로 만든 이유식</span>
                                    <span className="bl-title">맘스쿠킹</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/ebadcfc5-97fa-4b27-8455-cc35a76bb2ef.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">우리아이 성장의 KEY를 찾다</span>
                                    <span className="bl-title">키플러스</span>
                                </li>
                            </ul>
                            <h3>냉장제품</h3>
                            <ul className="brand_list">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">365일 자연방목 3%미만 한정생산</span>
                                    <span className="bl-title">유기농산양</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">아기의 성장 단계별 영양설계</span>
                                    <span className="bl-title">아기사랑수</span>
                                </li>
                            </ul>
                            <h3>단백질보충제/영양식</h3>
                            <ul className="brand_list list3">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                            </ul>
                            <h3>두유/우유/물/음료</h3>
                            <ul className="brand_list">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">365일 자연방목 3%미만 한정생산</span>
                                    <span className="bl-title">유기농산양</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">아기의 성장 단계별 영양설계</span>
                                    <span className="bl-title">아기사랑수</span>
                                </li>
                            </ul>
                            <h3>커피/차</h3>
                            <ul className="brand_list">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">365일 자연방목 3%미만 한정생산</span>
                                    <span className="bl-title">유기농산양</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">아기의 성장 단계별 영양설계</span>
                                    <span className="bl-title">아기사랑수</span>
                                </li>
                            </ul>
                            <h3>가정배달</h3>
                            <ul className="brand_list">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                            </ul>
                        </Tab>
                        <Tab eventKey="profile" title="이름별">
                            <ul className="brand_tab_menu2">
                                <li className="tab_li">ㄱㄴㄷ</li>
                                <li className="tab_li">ㄹㅁㅂ</li>
                                <li className="tab_li">ㅅㅇㅈ</li>
                                <li className="tab_li">ㅊㅋㅌ</li>
                                <li className="tab_li">ㅍㅎ</li>
                                <li className="tab_li"></li>
                            </ul>
                            <h3>ㄱㄴㄷ</h3>
                            <ul className="brand_list brand_list2">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2022/202208/51a85abe-d397-4780-8d65-a70a1a3fd664.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                            </ul>
                            <h3>ㄹㅁㅂ</h3>
                            <ul className="brand_list brand_list2">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2022/202208/cce13fe0-c516-4644-a914-9a9e230134fc.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">한 번 더 생각한 우리아이 안심먹거리</span>
                                    <span className="bl-title">아이꼬야</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2022/202208/abc013ea-2ead-453b-9ceb-4363f5f789ea.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">품질검사도 영양성분도 한 수 위!</span>
                                    <span className="bl-title">아인슈타인</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2022/202208/47176eb5-5d5c-4945-b1f0-26eb4fbdd5ad.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">엄마의 마음으로 만든 이유식</span>
                                    <span className="bl-title">맘스쿠킹</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/ebadcfc5-97fa-4b27-8455-cc35a76bb2ef.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">우리아이 성장의 KEY를 찾다</span>
                                    <span className="bl-title">키플러스</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/ebadcfc5-97fa-4b27-8455-cc35a76bb2ef.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">우리아이 성장의 KEY를 찾다</span>
                                    <span className="bl-title">키플러스</span>
                                </li>
                            </ul>
                            <h3>ㅅㅇㅈ</h3>
                            <ul className="brand_list brand_list2">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">365일 자연방목 3%미만 한정생산</span>
                                    <span className="bl-title">유기농산양</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">아기의 성장 단계별 영양설계</span>
                                    <span className="bl-title">아기사랑수</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">365일 자연방목 3%미만 한정생산</span>
                                    <span className="bl-title">유기농산양</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">아기의 성장 단계별 영양설계</span>
                                    <span className="bl-title">아기사랑수</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">365일 자연방목 3%미만 한정생산</span>
                                    <span className="bl-title">유기농산양</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">아기의 성장 단계별 영양설계</span>
                                    <span className="bl-title">아기사랑수</span>
                                </li>
                            </ul>
                            <h3>ㅊㅋㅌ</h3>
                            <ul className="brand_list brand_list2">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">55년 모유 연구 노하우</span>
                                    <span className="bl-title">임페리얼 XO</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">분유에 진심을 영양에 과학을</span>
                                    <span className="bl-title">아이엠마더</span>
                                </li>
                            </ul>
                            <h3>ㅍㅎ</h3>
                            <ul className="brand_list brand_list2">
                                <li className="item">
                                    <span><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c" alt="" /></span>
                                    <span className="bl-desc">아기의 성장 단계별 영양설계</span>
                                    <span className="bl-title">아기사랑수</span>
                                </li>
                            </ul>
                        </Tab>
                        {/* <Tab eventKey="contact" title="Contact" disabled>
                            <div>
                                <h3>tab03</h3>
                            </div>
                        </Tab> */}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default Brand;