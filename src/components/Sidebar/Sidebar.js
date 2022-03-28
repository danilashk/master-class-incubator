import React from 'react';
import styles from './Sidebar.module.scss'
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            Its sidebar
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Components/Table1">Table 1</Link>
                </li>
                <li>
                    <Link to="/Components/Table2">Table 2</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
