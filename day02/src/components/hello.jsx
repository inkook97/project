import React from "react";

// function Hello({ name, color, isSpecial }) {
//     return (
//         <div style={{ color }}>
//             {/* {isSpecial ? < b >★★★</b> : null}  안녕하세요{name} */}
//             {isSpecial && < b >★★★</b>}  안녕하세요{name}
//         </div >
//     );
// };

function Hello(props) {
    return (
        <div style={{ color: props.color }}>
            {/* {isSpecial ? < b >★★★</b> : null}  안녕하세요{name} */}
            {props.isSpecial && < b >★★★</b>}  안녕하세요{props.name}
        </div >
    );
};

Hello.defaultProps = {
    color: 'pink',
    name: '무명'
}

export default Hello;