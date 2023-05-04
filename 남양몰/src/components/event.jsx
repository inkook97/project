import React from "react";
import styles from "./event.module.css"
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AiOutlineRightCircle } from "react-icons/ai";
import NoticeList from "./noticeList";



function Event() {
    return (
        <div>
            <div className="subimg">
                <Carousel>
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '300px', background: 'red', color: '#fff' }}>
                            <h3>슬라이드01</h3>
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '300px', background: 'green', color: '#fff' }}>
                            <h3>슬라이드02</h3>
                        </div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '300px', background: 'blue', color: '#fff' }}>
                            <h3>슬라이드03</h3>
                        </div>

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ width: '100%', height: '300px', background: 'red', color: '#fff' }}>
                            <h3>슬라이드04</h3>
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="contents">
                <div className={styles.contents_in}>
                    <div className={styles.notice_area}>
                        <div className={styles.notice}>
                            <div className={styles.notice_h}>
                                <h3>이벤트결과</h3>
                                <button>더보기<AiOutlineRightCircle /></button>
                            </div>
                            <div className={styles.notice_b}>
                                <NoticeList txt='[분유리뉴얼퀴즈] 리뉴얼 출시 퀴즈 이벤트 당첨자 발표 안내' date="23.01.26" />
                                <NoticeList txt='[뉴페이스체험단] 리얼 아몬드음료, 아몬드데이 체험단! 우수 리뷰 당첨자 발표' date="23.01.26" />
                                <NoticeList txt='[뉴페이스체험단] 아몬드데이 체험단 우수 리뷰 당첨자 발표' date="23.01.04" />
                                <NoticeList txt='[10월 임산부의 날] 프리미엄 멤버십 어썸한 쇼핑지원 당첨' date="23.01.04" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.event_tabmn} id='event_tabmn'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="event1" title="진행중인이벤트">
                                <div>진행중인이벤트</div>
                            </Tab>
                            <Tab eventKey="event2" title="종료된이벤트">
                                <div>종료된이벤트</div>
                            </Tab>

                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Event;