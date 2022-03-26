import React, {useEffect, useState} from 'react';
import styles from './Tables.module.scss'
import Header from "../../../Header/Header";
import PopUp from "../../../PopUp/PopUp";
import Tooltip from "../../../Tooltip/Tooltip";
import Notification from "../../../notification/Notification";
import UseNotificationHook from "../../../../hooks/notification.hook";

const Tables = () => {

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
            <div>
                <Header setShow={setShow} />
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>Country</th>
                        <th>University</th>
                        <th>IBAN</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>000001</td>
                        <td>Lani</td>
                        <td>Ovendale</td>
                        <td>lovendale0@w3.org</td>
                        <td>7850 Old Shore Drive</td>
                        <td>United Kingdom</td>
                        <td>University of Plymouth</td>
                        <td>BG34 MPVP 8782 88EX H1CJ SC</td>
                    </tr>
                    <tr>
                        <td>000002</td>
                        <td>Israel</td>
                        <td>Tassell</td>
                        <td>itassell1@ow.ly</td>
                        <td>245 Merchant Circle</td>
                        <td>Macedonia</td>
                        <td>South East European University</td>
                        <td>FR11 4824 2942 41H9 XBHC 46P2 O86</td>
                    </tr>
                    <tr>
                        <td>000003</td>
                        <td>Eveleen</td>
                        <td>Mercer</td>
                        <td>emercer2@ow.ly</td>
                        <td>70700 Kipling Pass</td>
                        <td>Portugal</td>
                        <td>Instituto Superior Novas Profissões - INP</td>
                        <td>GR96 7559 456P GUAN WTAJ 3VPB S0P</td>
                    </tr>
                    <tr>
                        <td>000006</td>
                        <td>Bunnie</td>
                        <td>Sked</td>
                        <td>bsked5@51.la</td>
                        <td>03418 Ludington Plaza</td>
                        <td>Nigeria</td>
                        <td>Federal University of Technology, Minna</td>
                        <td>ES45 6721 1332 3288 6455 1242</td>
                    </tr>
                    </tbody>
                </table>
                <div style={{marginBottom: 24}}>
                    <div role='table' className={styles.table}>
                        <div role='rowheader' className={styles.heading}>ID</div>
                        <div role='rowheader' className={styles.heading}>First Name</div>
                        <div role='rowheader' className={styles.heading}>Last Name</div>
                        <div role='rowheader' className={styles.heading}>Email</div>
                        <div role='rowheader' className={styles.heading}>Street</div>
                        <div role='rowheader' className={styles.heading}>Country</div>
                        <div role='rowheader' className={styles.heading}>University</div>
                        <div role='rowheader' className={styles.heading}>IBAN</div>
                    </div>
                    <div role='rowgroup' className={styles.rowGroup}>
                        <div className={styles.row} role='row'>000001</div>
                        <div className={styles.row} role='row'>Lani</div>
                        <div className={styles.row} role='row'>Ovendale</div>
                        <div className={styles.row} role='row'>lovendale0@w3.org</div>
                        <div className={styles.row} role='row'>7850 Old Shore DriveDri</div>
                        <div className={styles.row} role='row'>United Kingdom</div>
                        <div className={styles.row} role='row'>University of Plymouth</div>
                        <div className={styles.row} role='row'>BG34MPVP878288EXH1CJSC</div>
                    </div>
                </div>
                <div>
                    <button onClick={openPopUp} className={styles.btn}>Open PopUp</button>
                    {popUp ? <PopUp onClose={onClose}/> : null}
                    <div style={{position: 'relative', display: 'inline-block'}}>
                        <button onClick={openTooltip} className={styles.btn2}>Open Tooltip</button>
                        {tooltip ? <Tooltip
                            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/> : null}
                    </div>
                    <div style={{marginTop: 12, width: '150px'}}>
                        <button className={styles.btn3}>Open registration</button>
                    </div>
                    <div style={{marginTop: 12, width: '150px'}}>
                        <button className={styles.btn3}>Открыть окно регистрации</button>
                    </div>
                </div>
            </div>
            {show ? <Notification url={location.pathname} setShow={setShow}/> : null}
        </>

    );
};

export default Tables;
