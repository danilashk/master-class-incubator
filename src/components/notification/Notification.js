import React, {useEffect, useState} from 'react';
import styles from './Notification.module.scss'
import {useLocation} from "react-router-dom";

const Notification = (props) => {

    const [name, setName] = useState(() => {
        if (localStorage.getItem(`Alert${props.url}`)) {
            return false
        } else {
            return true
        }

    });

    const submit = () => {
        localStorage.setItem(`Alert${props.url}`, JSON.stringify(`Alert${props.url}`));
        const result =  localStorage.getItem(`Alert${props.url}`)
        if (result) {
            props.setShow(false)
        }
        setName(!name)
    }
    return (
        <>
            {<div className={styles.container}>
            <div className={styles.notification}>
                <div>
                    <p>A lot of text content</p>
                    <button onClick={submit}>Все понятно!</button>
                </div>
            </div>
        </div>}
        </>
    )
}


export default Notification;
