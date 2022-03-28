import React, {useEffect, useState} from 'react';
import PreviewItem from "../../PreviewItem/PreviewItem";
import styles from "./StartPage.module.scss"
import {Route, useLocation} from "react-router-dom";
import Notification from "../../notification/Notification";
import StartPageNotification from "../../notification/StartPageNotification";

const data = [
    {name: 'HTML', link: "HTML"},
    {name: 'Selectors', link: "Selectors"},
    {name: 'Flex or Grid', link: "FlexOrGrid"},
    {name: 'Components', link: "Components"},
    {name: 'Portals', link: "Portals"},

]


const StartPage = (props) => {
    const location = useLocation()

    // const [remember, setRemember] = useState(true)
    //
    // const onRemember = () => {
    //     localStorage.setItem('rememberMe', remember);
    //     return remember
    // }

    const items = data.map((value) => {
        return (
                <PreviewItem text={value.name} link={value.link}/>
        )
    })

    return (
        <>
            <div className={styles.itemsBox}>
                {items}
            </div>
            <StartPageNotification/>
            {/*<Notification url={location.pathname}/>*/}
        </>
    );
};

export default StartPage;
