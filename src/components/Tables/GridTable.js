import React from 'react';
import styles from "./Tables.module.scss";

const GridTable = () => {
    return (
        <div className={styles.gridTable}>
            <div role='table' className={styles.table}>
                <div role='rowheader' className={styles.heading}>ID</div>
                <div role='rowheader' className={styles.heading}>First Name</div>
                <div role='rowheader' className={styles.heading}>Last Name</div>
            </div>
            <div role='rowgroup' className={styles.rowGroup}>
                <div className={styles.row} role='row' data-label="ID">000001</div>
                <div className={styles.row} role='row' data-label="First Name">Lani</div>
                <div className={styles.row} role='row' data-label="Last Name">Ovendale</div>
            </div>
            <div role='rowgroup' className={styles.rowGroup}>
                <div className={styles.row} role='row' data-label="ID">000001</div>
                <div className={styles.row} role='row' data-label="First Name">Lani</div>
                <div className={styles.row} role='row' data-label="Last Name">Ovendale</div>
            </div>
        </div>
    );
};

export default GridTable;
