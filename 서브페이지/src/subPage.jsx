import React, { useState } from "react";
import SubPage01 from "./subPage01";
import SubPage02 from "./subPage02";
import SubPage03 from "./subPage03";
import SubPage04 from "./subPage04";
import SubPage05 from "./subPage05";

function SubPage() {
    const [num, setNum] = useState(0);
    const style = {
        cursor: 'pointer'
    };

    const num01 = () => {
        setNum(1);
    };
    const num02 = () => {
        setNum(2);
    };
    const num03 = () => {
        setNum(3);
    };
    const num04 = () => {
        setNum(4);
    };
    const num05 = () => {
        setNum(5);
    };

    return (
        <div>
            <h3>SubPage</h3>
            <ul>
                <li onClick={num01} style={style}>서브페이지1</li>
                <li onClick={num02} style={style}>서브페이지2</li>
                <li onClick={num03} style={style}>서브페이지3</li>
                <li onClick={num04} style={style}>서브페이지4</li>
                <li onClick={num05} style={style}>서브페이지5</li>
            </ul>
            {num === 1 && < SubPage01 />}
            {num === 2 && < SubPage02 />}
            {num === 3 && < SubPage03 />}
            {num === 4 && < SubPage04 />}
            {num === 5 && < SubPage05 />}
        </div>
    );
};

export default SubPage;