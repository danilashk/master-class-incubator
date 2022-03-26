import React, {useEffect, useState} from 'react';
import styles from './Notification.module.scss'
import {useLocation} from "react-router-dom";

const Notification = (props) => {
    console.log(props)

    const [name, setName] = useState(() => {
        if (localStorage.getItem(`Alert${props.url}`)) {
            return false
        } else {
            return true
        }
        // const saved = localStorage.getItem("name");
        // const initialValue = JSON.parse(saved);
        // console.log(initialValue)
        // return initialValue;
    });

    // useEffect(() => {
    //
    //     localStorage.setItem(`name${props.url}`, JSON.stringify(name));
    //
    // }, [name]);

    // useEffect(() => {
    //     const result =  localStorage.getItem(`name${props.url}`)
    //     if (result) {
    //         props.setShow(!name)
    //     }
    // }, [])
    const submit = () => {
        //console.log('qeqwe')
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
