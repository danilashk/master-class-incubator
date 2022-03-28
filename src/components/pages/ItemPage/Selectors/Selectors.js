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
            <div className={styles.container}>
                <Header setShow={ setShow } status={true}/>
                <main className={styles.main}>
                    <section>
                        <h1 className={styles.pageTitle}>Селекторы</h1>
                        <div className={styles.posts}>
                            {posts}
                        </div>
                    </section>
                </main>
            </div>
            {show ? <Notification url={location.pathname} setShow={setShow}/> : null}
        </>

    )
};


export default Selectors;
