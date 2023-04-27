import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import styles from './checkbox.module.css';

function CheckBox({ children, checked, ...rest }) {
    return (
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={styles.icon}>{checked ?
                    (<MdCheckBox />) : (<MdCheckBoxOutlineBlank className={styles.checked} />)}
                </div>
            </label>
            <span>{children}</span>
        </div>
    );
};

export default CheckBox;