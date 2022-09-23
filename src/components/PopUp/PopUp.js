import React from 'react';
import styles from './PopUp.module.scss'

const PopUp = (props) => {
    return (
        <div className={styles.popup}>
            <div className={styles.popupBody}>
                <div className={styles.popupContent}>
                    <button onClick={props.onClose} href="" className={styles.popupClose}>X</button>
                    <h2 className={styles.popupTitle}>Title</h2>
                    <p className={styles.popupDescription}>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
};

export default PopUp;
