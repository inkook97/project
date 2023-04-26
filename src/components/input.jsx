import React, { useState } from "react";

function Input() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value); // input 입력할때마다 입력된 값을 변환
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>지우기</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
};

export default Input;