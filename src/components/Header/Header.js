import React from 'react';
import {Link, useLocation} from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {
    const location = useLocation()

    const aboutBlock = () => {
        if (localStorage.getItem(`name${location.pathname}`)) {
            localStorage.setItem(`name${location.pathname}`, true)
        }
    }
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <button onClick={aboutBlock}>О чем этот блок?</button>
                <Link className={styles.link} to='/'>Main Page</Link>
            </nav>
        </header>
    );
};

export default Header;
