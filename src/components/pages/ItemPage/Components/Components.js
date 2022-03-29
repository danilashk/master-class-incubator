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
import DataTables from "../../../../data/dataComponents/dataTables";
import {Link, Route} from "react-router-dom";
import Tables from "./Section/Tables";
import Button from "./Section/Button";

const Components = () => {

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
        <div className="transition">
        <div className={styles.wrapper}>
            <Route>
                <Header status={false}/>
                <div className={styles.componentsPage}>
                    <Sidebar/>
                    <div className={styles.componentsInner}>

                        <Route exact path={'/Components'} render={() => <div>Render Render Render Rende rRender Rende rR en de r R e nd er</div>}/>

                        <Route exact path={'/Components/Table'} render={() => <Tables/>}/>

                        <Route exact path={'/Components/Button'} render={() => <Button/>}/>
                        {/*<div>*/}
                        {/*    <button onClick={openPopUp} className={styles.btn}>Open PopUp</button>*/}
                        {/*    {popUp ? <PopUp onClose={onClose}/> : null}*/}
                        {/*    <div style={{position: 'relative', display: 'inline-block'}}>*/}
                        {/*        <button onClick={openTooltip} className={styles.btn2}>Open Tooltip</button>*/}
                        {/*        {tooltip ? <Tooltip*/}
                        {/*            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/> : null}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                {/*{show ? <Notification url={location.pathname} setShow={setShow}/> : null}*/}
            </Route>
        </div>
        </div>
    );
};

export default Components;
