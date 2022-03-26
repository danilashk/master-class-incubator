import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import styles from './Header.module.scss'

const Header = (props) => {

    const aboutBlock = () => {
        props.setShow(true)
    }
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <button style={{marginRight: '16px'}} onClick={aboutBlock}>О чем этот блок?</button>
                    <Link className={styles.link} to='/'>Main Page</Link>
                </nav>
                {props.children}
            </header>
        </>
    );
};

export default Header;
