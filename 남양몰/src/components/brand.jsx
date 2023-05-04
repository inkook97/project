import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useItemState } from "../context";

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
            <div className="subimg">brand</div>
            <div className="contents">
                <div style={{
                    margin: '0 auto',
                    width: '1100px',
                    height: '1000px',
                    backgroundColor: '#ccc'
                }} id='brand_tab'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="분류별">
                            <div>
                                <h3>tab01</h3>
                                <div>
                                    {items.map((item) => (
                                        <BrandItem1 item={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="이름별">
                            <div>
                                <h3>tab02</h3>
                                <div>
                                    {items.map((item) => (
                                        <BrandItem2 item={item} key={item.id} />
                                    ))}
                                </div>
                            </div>
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