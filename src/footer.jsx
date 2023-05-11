import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="fcol fnotice">
                    <h2>공지사항</h2>
                    <span>남양몰 5월 연휴 배송 및 고객센터 운영 <br />안내</span><br />
                    <span>2023.04.25</span>
                </div>
                <div className="fcol fdownload">
                    <h2>APP 다운로드</h2>
                    <span>
                        내 손안에 남양몰 오픈!<br />
                        앱스토어, 구글플레이에서 만나요
                    </span><br />
                    <a href=""><span>다운로드</span></a>
                </div>
                <div className="fcol fcustomer">
                    <h2>고객센터</h2>
                    <span>
                        평일: 오전9시~오후5시<br />
                        (점심시간: 11시30분~1시)<br />
                        주말,공휴일은 1:1문의를 이용해주세요.
                    </span><br />
                    <span>1522-0130</span>
                </div>
                <div className="fcol fcustomer2">
                    <a href="">
                        <span>img</span><br />
                        <span>1:1 문의</span>
                    </a><br />
                    <a href="">
                        <span>img</span><br />
                        <span>자주묻는질문</span>
                    </a>
                </div>
            </div>
            <div className="footer-middle">
                <ul>
                    <li><a href="">회사소개</a></li>
                    <li><a href="">이용약관</a></li>
                    <li><a href="">개인정보처리방침</a></li>
                    <li><a href="">고객센터</a></li>
                </ul>
            </div>
            <div className="footer-bottom">

            </div>
        </div>
    )
}

export default Footer;