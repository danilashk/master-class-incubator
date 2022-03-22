import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <details>
                <summary>Рабочее время</summary>
                с понедельника по пятницу, с 8:00 до 18:00
            </details>
            <div className={styles.contact}>
                <address>
                    E-mail: <a className={styles.link} href="mailto:me@mail.me">me@mail.me </a>
                     Carrot Street, 42 - 01010 My City
                </address>
                <span>Number: </span><a className={styles.link} href="tel:+111111">11-11-11</a>
            </div>
        </footer>
    );
};

export default Footer;
