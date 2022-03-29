import React, {useState} from 'react';
import styles from './Guide.module.scss'
import {element} from "prop-types";

const Guide = (props) => {
    const [show, setShow] = useState(false)
    const onSetShow = () => {
        setShow(!show)
        props.showElement(!show)
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <button onClick={onSetShow}>Click</button>
                <div>
                    {show ? <div>12345</div> : null}
                </div>
            </div>
        </div>
    );
};

export default Guide;
