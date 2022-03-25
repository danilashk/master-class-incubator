import React, {useEffect, useState} from 'react';
import styles from './Notification.module.scss'
import {useLocation} from "react-router-dom";

const Notification = (props) => {


    const [name, setName] = useState(() => {
        if (localStorage.getItem(`name${props.url}`)) {
            return false
        } else {
            return true
        }
        // const saved = localStorage.getItem("name");
        // const initialValue = JSON.parse(saved);
        // console.log(initialValue)
        // return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(`name${props.url}`, JSON.stringify(name));
    }, [name]);

    const submit = () => {
        setName(!name)
    }
    return (
        <>
            {name ? <div className={styles.container}>
            <div className={styles.notification}>
                <div>
                    <p>A lot of text content</p>
                    <button onClick={submit}>Все понятно!</button>
                </div>
            </div>
        </div> : null}
        </>
    )
}


export default Notification;
