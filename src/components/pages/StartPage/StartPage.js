import React from 'react';
import PreviewItem from "../../PreviewItem/PreviewItem";
import styles from "./StartPage.module.scss"
import {Route} from "react-router-dom";

const data = [
    {name: 'HTML', link: "HTML"},
    {name: 'Selectors', link: "Selectors"},
    {name: 'Flex or Grid', link: "FlexOrGrid"},
    {name: 'Components', link: "Tables"},
    {name: 'Portals', link: "Portals"},

]


const StartPage = (props) => {
    const items = data.map((value) => {
        return (
                <PreviewItem text={value.name} link={value.link}/>
        )
    })
    return (
            <div className={styles.itemsBox}>
                {items}
            </div>
    );
};

export default StartPage;
