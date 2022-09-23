import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import styles from './Header.module.scss'

const Header = (props) => {
    const [btn, showBtn] = useState(props.status)

    const aboutBlock = () => {
        props.setShow(true)
    }
    const on = props.set
    return (
        <>
            <header className={on ? styles.header : styles.headerOn}>
                <nav className={styles.nav}>
                    {btn ? <button className={styles.aboutBlockBtn} onClick={aboutBlock}>О чем этот блок?</button> : null} <Link className={styles.link} to='/'>Main Page</Link>
                </nav>
                {props.children}
            </header>
        </>
    );
};

export default Header;
