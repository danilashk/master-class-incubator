import React from 'react';
import {Link} from "react-router-dom";
import styles from "./PreviewItem.module.scss"
import FlexOrGrid from "../pages/ItemPage/FlexOrGrid/FlexOrGrid";

const PreviewItem = (props) => {
    return (
        <div className={styles.item}>
            <Link className={styles.link} to={`/${props.link}`}>
                <h2 className={styles.title}>
                    {props.text}
                </h2>
            </Link>
        </div>
    );
};

export default PreviewItem;
