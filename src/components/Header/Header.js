import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.link} to='/'>Main Page</Link>
            </nav>
        </header>
    );
};

export default Header;
