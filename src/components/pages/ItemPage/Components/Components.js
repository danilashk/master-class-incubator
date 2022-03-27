import React, {useEffect, useState} from 'react';
import styles from './Components.module.scss'
import Header from "../../../Header/Header";
import PopUp from "../../../PopUp/PopUp";
import Tooltip from "../../../Tooltip/Tooltip";
import Notification from "../../../notification/Notification";
import UseNotificationHook from "../../../../hooks/notification.hook";
import Sidebar from "../../../Sidebar/Sidebar";
import SimpleTable from "../../../Tables/SimpleTable";
import TablesWithGrid from "../../../Tables/TablesWithGrid";
import GridTable from "../../../Tables/GridTable";
import CustomizedAccordions from "../../../MUI/Accordeon/Accordeon";

const Components = () => {

    const {show, setShow, location} = UseNotificationHook()

    const [popUp, setPopUp] = useState(false)
    const openPopUp = () => {
        setPopUp(!popUp)
    }
    const onClose = () => {
        setPopUp(false)
    }

    const [tooltip, setTooltip] = useState(false)
    const openTooltip = () => {
        setTooltip(!tooltip)
    }


    return (
        <>
            <Header setShow={setShow} />
            <div className={styles.componentsPage}>
                <Sidebar/>
                <div className={styles.componentsInner}>
                    <div className={styles.component}>
                        <h2>Обычная таблица</h2>
                        <SimpleTable/>
                    </div>

                    <div className={styles.component}>
                        <h2>Таблица на гридах</h2>
                        <TablesWithGrid/>
                        <CustomizedAccordions descriptionStatus={false}/>
                    </div>

                    <div className={`${styles.component} ${styles.componentHeight}`}>
                        <h2>Таблица с липким верхом</h2>
                        <TablesWithGrid/>
                    </div>

                    <div className={styles.component}>
                        <h2>Таблица на чистых гридах</h2>
                        <GridTable/>
                    </div>
                    {/*<div>*/}
                    {/*    <button onClick={openPopUp} className={styles.btn}>Open PopUp</button>*/}
                    {/*    {popUp ? <PopUp onClose={onClose}/> : null}*/}
                    {/*    <div style={{position: 'relative', display: 'inline-block'}}>*/}
                    {/*        <button onClick={openTooltip} className={styles.btn2}>Open Tooltip</button>*/}
                    {/*        {tooltip ? <Tooltip*/}
                    {/*            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/> : null}*/}
                    {/*    </div>*/}
                    {/*    <div style={{marginTop: 12, width: '150px'}}>*/}
                    {/*        <button className={styles.btn3}>Open registration</button>*/}
                    {/*    </div>*/}
                    {/*    <div style={{marginTop: 12, width: '150px'}}>*/}
                    {/*        <button className={styles.btn3}>Открыть окно регистрации</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            {show ? <Notification url={location.pathname} setShow={setShow}/> : null}
        </>
    );
};

export default Components;
