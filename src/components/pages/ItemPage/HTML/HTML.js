import React, {useEffect, useState} from 'react';
import styles from './HTML.module.scss'
import logo from '../../../../assets/logo512.png'
import {Link, useLocation} from "react-router-dom";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import Notification from "../../../notification/Notification";
import UseNotificationHook from "../../../../hooks/notification.hook";
import Guide from "../../../Guide/Guide";

const Html = () => {
    const {show, setShow, location} = UseNotificationHook()
    const [styled, setStyle] = useState(false)
    const onSetStyle = () => {
        setStyle(!styled)
    }
    return (
        <>
            <div className={styles.wrapper}>
                <Header setShow={ setShow }>
                    <button onClick={onSetStyle} className={styles.click}>123</button>
                </Header>
                <main className={styles.main}>
                    <section>
                        <h1 className={styles.pageTitle}>HTML</h1>
                        <article className={styles.article}>
                            <div className={styles.post}>
                                <h3 className={styles.title}>Article Title</h3>
                                <p className={styles.text}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.
                                    <span style={{fontWeight: '500', color: 'rgb(108, 212, 173)'}}> Mark </span>
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <figure className={styles.figure}>
                                <div className={styles.imgBox}>
                                    <img src={logo} alt="Logo"/>
                                </div>
                                <figcaption>Описание логотипа</figcaption>
                                <span>Published: <time dateTime="2020-12-20T20:00:00">Dec. 20th</time></span>
                            </figure>
                            <Guide/>
                        </article>
                    </section>
                </main>
                <Footer/>
            </div>
            {show ? <Notification url={location.pathname} setShow={setShow}/> : null}
        </>
    );
};

export default Html;
