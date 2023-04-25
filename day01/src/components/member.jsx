import React from "react";
import styles from './member.module.css';

function Member() {
    return (
        <div>
            <div className={styles.subimg}>member</div>
            <div style={{
                margin: '0 auto',
                width: '500px',
                height: '1000px',
                backgroundColor: '#ccc'
            }}>contents</div>
        </div>
    );
};
export default Member;