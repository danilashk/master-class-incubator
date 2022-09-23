import styles from './Selectors.module.scss'
import Header from "../../../Header/Header";
import * as React from 'react';
import CustomizedAccordions from "../../../MUI/Accordeon/Accordeon";
import DataSelectors from "../../../../data/dataSelectors";
import {useLocation} from "react-router-dom";
import Notification from "../../../notification/Notification";
import {useEffect, useState} from "react";
import UseNotificationHook from "../../../../hooks/notification.hook";


const Selectors = (props) => {
    const {show, setShow, location} = UseNotificationHook()
    const posts = DataSelectors.data.map((i) => {
        return (
            <CustomizedAccordions
                title={i.title.textOfTitle}
                selector={i.title.selectorType}
                result={i.result.code}
                jsxLanguage={i.templatesCode.html.lang}
                jsxCode={i.templatesCode.html.code}
                cssLanguage={i.templatesCode.css.lang}
                cssCode={i.templatesCode.css.code}
                description={i.description.text}
            />
        )
    })
    return (
        <>
            <div className="transition">
                <div className={styles.container}>
                    <Header setShow={setShow} status={true}/>
                    <main className={styles.main}>
                        <section>
                            <h1 className={styles.pageTitle}>Селекторы</h1>
                            <div className={styles.posts}>
                                {posts}
                            </div>
                        </section>
                    </main>
                </div>
                {show ? <Notification
                    description={'На данной странице будут разобраны основные селекторы которые используются в работе. Зачем это надо? Зачастую, мы стилизуем некоторые библиотеки/компоненты с помощью секторов, но не всегда понимаем как через дерево достучаться до них'}
                    url={location.pathname} setShow={setShow}/> : null}
            </div>
        </>

    )
};


export default Selectors;
