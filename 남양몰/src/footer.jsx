import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top_in">
                    <div className="fcol fnotice">
                        <h2>공지사항</h2>
                        <br />
                        <span>남양몰 5월 연휴 배송 및 고객센터 운영 <br />안내</span><br /><br />
                        <span>2023.04.25</span>
                    </div>
                    <div className="fcol fdownload">
                        <h2>APP 다운로드</h2>
                        <br />
                        <span>
                            내 손안에 남양몰 오픈!<br />
                            앱스토어, 구글플레이에서 만나요
                        </span><br /><br />
                        <a href="">다운로드 <span>></span></a>
                    </div>
                    <div className="fcol fcustomer">
                        <h2>고객센터</h2>
                        <br />
                        <span>
                            평일: 오전9시~오후5시<br />
                            (점심시간: 11시30분~1시)<br />
                            주말,공휴일은 1:1문의를 이용해주세요.
                        </span><br /><br />
                        <span className="call">1522-0130</span>
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
            </div>
            <div className="footer-middle">
                <ul className="footer-middle_in">
                    <li><a href="">회사소개</a></li>
                    <li><a href="">이용약관</a></li>
                    <li><a href="">개인정보처리방침</a></li>
                    <li><a href="">고객센터</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <div className="fleft">
                    <div>
                        <img src="https://shopping.namyangi.com/resources/images/common/logo.png" alt="" />
                    </div>
                    <select name="" id="sel-fs">
                        <option value="">패밀리사이트</option>
                        <option value="">남양유업</option>
                        <option value="">남양아이</option>
                        <option value="">아이꼬야</option>
                    </select>
                    <a href="">이동</a>
                    <ul>
                        <li>icon</li>
                        <li>icon</li>
                        <li>icon</li>
                        <li>icon</li>
                    </ul>
                </div>
                <div className="fright">
                    <span className="info info_all">대표자 성명 : 이광범</span>
                    <span className="info">개인정보보호책임자 : 신현정</span>
                    <span className="info">사업자등록번호 : 202-81-04367 (사업자정보 확인)</span>
                    <span className="info">통신판매업신고 : 서울강남 00873호</span><br />
                    <span className="info info_all">의료기기판매업신고 : 제7693호</span>
                    <span className="info">사업자소재지 : 서울시 강남구 도산대로 240, 1964빌딩 남양유업(주)</span>
                    <span className="info">대표번호 : 02-734-1305</span>
                    <span className="info">팩스번호 : 02-733-6389</span><br />
                    <span className="info info_all">이메일 : webmaster@namyangi.com</span>
                    <span className="info">남양몰 대표번호 : 1522-0130</span>
                    <span className="info">남양분유 임신육아교실 02-2010-6476
                    </span><br /><br />
                    <div className="fright_middle">
                        <span>&#169;</span>
                        <span> NAMYANG DAIRY PRODUCTS CO.,LTD. ALL RIGHT RESERVED.</span><br />
                        남양아이몰의 정보, 콘텐츠 및 UI등을 상업적 목적으로 전재, 전송, 스크래핑 등 무단 사용할 수 없습니다.
                    </div>
                    <ul className="fright_img">
                        <li>img<img src="" alt="" /></li>
                        <li>img<img src="" alt="" /></li>
                        <li>img<img src="" alt="" /></li>
                        <li>img<img src="" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;