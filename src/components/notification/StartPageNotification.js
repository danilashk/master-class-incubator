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
                <div className={styles.startPageNotification}>
                    <div>
                        <h1>О чем эта страница?</h1>
                        <p>Какая-то кладежь знаний "It-Incubator", которая требует большее количество текста.</p>
                        <button className={styles.notBtn} onClick={submit}>Все понятно!</button>
                    </div>
                </div>
            </div> : null}
        </>
    )
}


export default StartPageNotification;
