import React from 'react';
import styles from './Tooltip.module.scss'

const Tooltip = (props) => {
    return (
            <div className={styles.tooltip}>
                <div className={styles.triangle} />
                <div className={styles.description}>
                    <p className={styles.text}>{props.text}</p>
                </div>
            </div>
    );
};

export default Tooltip;
