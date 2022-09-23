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
    const [article, setArticle] = useState(true)
    const [mainEl, setMainEl] = useState(true)

    const handleShowElement = () => {
        return (
            setArticle(!article)
        )
    }

    const handleShowMainElements = () => {
        return (
            setMainEl(!mainEl)
        )
    }

    return (
        <>
            <div className="transition">
                {/*<div className={styles.wrapper}>*/}
                {/*    <Header setShow={setShow} status={true} set={mainEl}/>*/}
                {/*    <main className={mainEl ? styles.main : styles.mainSt}>*/}
                {/*        <Guide description={`В первую очередь на странице отрисовывают header, main и footer. Сейчас вы их и видите в таком же расположении.`} showElement={handleShowMainElements} btnText={'Структура первого порядка'}/>*/}
                {/*        <article className={article ? styles.article : styles.articleSet}>*/}
                {/*            <div className={styles.post}>*/}
                {/*                <h1 className={article ?styles.title : styles.titleOn}>Article Title</h1>*/}
                {/*                <p className={article ? styles.text : styles.textOn}>*/}
                {/*                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem*/}
                {/*                    Ipsum*/}
                {/*                    has been the industry's standard dummy text ever since the 1500s, when an unknown*/}
                {/*                    printer took a galley of type and scrambled it to make a type specimen book.*/}
                {/*                    <span style={{fontWeight: '500', color: 'rgb(108, 212, 173)'}}> Mark </span>*/}
                {/*                    has been the industry's standard dummy text ever since the 1500s, when an unknown*/}
                {/*                    printer took a galley of type and scrambled it to make a type specimen book.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <figure className={article ? styles.figure : styles.figureOn} >*/}
                {/*                <div className={styles.imgBox}>*/}
                {/*                    <img src={logo} alt="Logo"/>*/}
                {/*                </div>*/}
                {/*                <figcaption>Описание логотипа</figcaption>*/}
                {/*                <span>Published: <time dateTime="2020-12-20T20:00:00">Dec. 20th</time></span>*/}
                {/*            </figure>*/}
                {/*            <Guide description={`это article`} showElement={handleShowElement} btnText={'Структура второго порядка'}/>*/}
                {/*        </article>*/}
                {/*    </main>*/}
                {/*    <Footer set={mainEl}/>*/}
                {/*</div>*/}
                <div className={styles.wrapper}>
                    <Header setShow={setShow} status={true} set={mainEl}/>
                    <div className={styles.container}>
                        <div className={styles.viewScreen}>
                            <div>
                                <p>Click Button to Start</p>
                            </div>
                        </div>
                        <div className={styles.textScreen}>
                            <div>
                                <div className={styles.text}>
                                    <p>Some Text</p>
                                </div>
                                <div>
                                    <button>Back</button>
                                    <button>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {show ? <Notification
                        description={'Семантическая вёрстка — подход к разметке, который опирается не на внешний вид сайта, а на смысловое предназначение каждого блока и логическую структуру документа. Почему семантика важна? Чтобы сделать сайт доступным. Зрячие пользователи могут без проблем с первого взгляда понять, где какая часть страницы находится — где заголовок, списки или изображения. Для незрячих или частично незрячих всё сложнее. Основной инструмент для просмотра сайтов не браузер, который отрисовывает страницу, а скринридер, который читает текст со страницы вслух.\n' +
                            'Этот инструмент «зачитывает» содержимое страницы, и семантическая структура помогает ему лучше определять, какой сейчас блок, а пользователю понимать, о чём идёт речь. Таким образом семантическая разметка помогает большему количеству пользователей взаимодействовать с вашим сайтом. Так же это влияет на отображение сайта в поисковиках. Известны примеры, когда сайты с семантической версткой отображаются в поиске выше, чем сайты написанные на одних div.'}
                        url={location.pathname} setShow={setShow}/> : null}
                </div>
            </div>
        </>
    );
};

export default Html;
