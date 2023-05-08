import React from "react";
import { Route, Link } from 'react-router-dom';
import Profile2 from "./profile2";

// 함수 표현식

const Profiles2 = () => {
    return (
        <div>
            <h2>과일 이름2</h2>
            <ul>
                <li>
                    <Link to="/profiles2/apple2">애플2</Link>
                </li>
                <li>
                    <Link to="/profiles2/banana2">바나나2</Link>
                </li>
            </ul>

            <Route path='/profiles2' exact />
            <Route path='/profiles2/:username' component={Profile2} />
        </div>
    );
};

export default Profiles2;