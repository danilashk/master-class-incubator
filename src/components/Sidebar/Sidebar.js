import React from 'react';
import styles from './Sidebar.module.scss'
import {Link, NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                <ul className={styles.menuList}>
                    <li>
                        <NavLink activeStyle={{color: 'white'}} to="/Components/Table">Table</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{color: 'white'}} to="/Components/Button">Button</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{color: 'white'}} to="/Components/Portals">Portals</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
