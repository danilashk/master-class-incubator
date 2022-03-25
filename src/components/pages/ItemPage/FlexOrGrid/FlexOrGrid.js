import React from 'react';
import styles from './FlexOrGrid.module.scss'
import Header from "../../../Header/Header";
import {useLocation} from "react-router-dom";
import Notification from "../../../notification/Notification";

const FlexOrGrid = () => {
    const location = useLocation()
    return (
        <>
            <Header/>
            <div className={styles.wrapper1}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
                <div>Four</div>
                <div>Five</div>
            </div>

            <div className={styles.wrapper2}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
                <div>Four</div>
                <div>Five</div>
            </div>

            <div className={styles.wrapper3}>
                <div className={styles.box1}>One</div>
                <div className={styles.box2}>Two</div>
                <div className={styles.box3}>Three</div>
            </div>

            <div className={styles.wrapper4}>
                <div className={styles.item1}>One</div>
                <div className={styles.item2}>Two</div>
                <div className={styles.item3}>Three</div>
            </div>

            <div className={styles.wrapper5}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>


            <p>grid-template-columns: repeat(4, 100px); // Повторяет 300px 4 раза</p>
            <div className={styles.wrapper15}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>

            <p>grid-template-columns: repeat(auto-fill, 300px);</p>
            <div className={styles.wrapper16}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>

            <p>grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));</p>
            <div className={styles.wrapper17}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>

            <p>grid-template-columns: repeat(auto-fit, 300px);</p>
            <div className={styles.wrapper18}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>

            <p>grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));</p>
            <div className={styles.wrapper19}>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>
            {/*<Notification url={location.pathname}/>*/}


        </>
    );
};

export default FlexOrGrid;
