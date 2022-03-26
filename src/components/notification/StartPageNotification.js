import React, {useEffect, useState} from 'react';
import styles from './Notification.module.scss'

const StartPageNotification = (props) => {


    const [name, setName] = useState(() => {
        if (localStorage.getItem(`StartPageAlert`)) {
            return false
        } else {
            return true
        }
    });

    useEffect(() => {
        localStorage.setItem(`StartPageAlert`, JSON.stringify(name));
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


export default StartPageNotification;
