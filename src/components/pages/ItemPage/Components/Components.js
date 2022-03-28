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
import DataTables from "../../../../data/dataTables";
import {Route} from "react-router-dom";

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
        <Route>
            <Header setShow={setShow}/>
            <div className={styles.componentsPage}>
                <Sidebar/>
                <div className={styles.componentsInner}>
                    <Route exact path={'/Components/Table1'} render={() => <div className={styles.component}>
                        <h2>Обычная таблица</h2>
                        <p>{DataTables.data[0].description.text}</p>
                        <SimpleTable/>
                        <CustomizedAccordions descriptionStatus={false} title={DataTables.data[0].title.title}
                                              jsxCode={DataTables.data[0].templatesCode.html.code}
                                              jsxLanguage={DataTables.data[0].templatesCode.html.lang}
                                              cssCode={DataTables.data[0].templatesCode.css.code}
                                              cssLanguage={DataTables.data[0].templatesCode.css.lang}/>
                    </div>}/>

                    <Route exact path={'/Components/Table2'} render={() => <div className={styles.component}>
                        <h2>Обычная таблица</h2>
                        <p>{DataTables.data[0].description.text}</p>
                        <SimpleTable/>
                        <CustomizedAccordions descriptionStatus={false} title={DataTables.data[1].title.title}
                                              jsxCode={DataTables.data[1].templatesCode.html.code}
                                              jsxLanguage={DataTables.data[1].templatesCode.html.lang}
                                              cssCode={DataTables.data[1].templatesCode.css.code}
                                              cssLanguage={DataTables.data[1].templatesCode.css.lang}/>
                    </div>}/>

                    {/*<div className={styles.component}>*/}
                    {/*    <h2>Таблица на гридах</h2>*/}
                    {/*    <TablesWithGrid/>*/}
                    {/*    <CustomizedAccordions descriptionStatus={false} title={DataTables.data[1].title.title}*/}
                    {/*                          jsxCode={DataTables.data[1].templatesCode.html.code}*/}
                    {/*                          jsxLanguage={DataTables.data[1].templatesCode.html.lang}*/}
                    {/*                          cssCode={DataTables.data[1].templatesCode.css.code}*/}
                    {/*                          cssLanguage={DataTables.data[1].templatesCode.css.lang}/>*/}
                    {/*</div>*/}

                    {/*<div className={styles.component}>*/}
                    {/*    <h2>Таблица с липким верхом</h2>*/}
                    {/*    <div className={styles.componentHeight}>*/}
                    {/*        <TablesWithGrid/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={styles.component}>*/}
                    {/*    <h2>Таблица на чистых гридах</h2>*/}
                    {/*    <GridTable/>*/}
                    {/*    <CustomizedAccordions descriptionStatus={false} title={DataTables.data[2].title.title}*/}
                    {/*                          jsxCode={DataTables.data[2].templatesCode.html.code}*/}
                    {/*                          jsxLanguage={DataTables.data[2].templatesCode.html.lang}*/}
                    {/*                          cssCode={DataTables.data[2].templatesCode.css.code}*/}
                    {/*                          cssLanguage={DataTables.data[2].templatesCode.css.lang}/>*/}
                    {/*</div>*/}
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
        </Route>
    );
};

export default Components;
