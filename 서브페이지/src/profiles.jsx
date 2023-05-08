import React from "react";
import { Route, Link } from 'react-router-dom';
import Profile from "./profile";

// 함수 표현식

const Profiles = () => {
    return (
        <div>
            <h2>유저 목록</h2>
            <ul>
                <li>
                    <Link to="/profiles/apple">apple</Link>
                </li>
                <li>
                    <Link to="/profiles/banana">banana</Link>
                </li>
            </ul>

            <Route path='/profiles' exact />
            <Route path='/profiles/:username' component={Profile} />
        </div>
    );
};

export default Profiles;