import React, {useState} from 'react';
import styles from './Guide.module.scss'

const Guide = (props) => {
    const [show, setShow] = useState(false)
    const onSetShow = () => {
        setShow(!show)
        props.showElement(!show)
    }

    return (
        <div className={styles.guideBox}>
            <div>
                <button className={styles.guideBtn} onClick={onSetShow}>{props.btnText}</button>
                <div className={styles.guide}>
                    {show ?
                        <div className={styles.wrapper}><p className={styles.text}>{props.description}</p></div>
                        : null}
                </div>
            </div>
        </div>
    );
};

export default Guide;
