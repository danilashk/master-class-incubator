import React from 'react';
import styles from './Tables.module.scss'

const TablesWithGrid = () => {
    return (
        <table className={styles.tableWithGrid}>
            <thead>
            <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="ID">000001</td>
                <td data-label="First Name">Lani</td>
                <td data-label="Last Name">Ovendale</td>
            </tr>
            <tr>
                <td data-label="ID">000002</td>
                <td data-label="First Name">Israel</td>
                <td data-label="Last Name">Tassell</td>
            </tr>
            <tr>
                <td data-label="ID">000003</td>
                <td data-label="First Name">Eveleen</td>
                <td data-label="Last Name">Mercer</td>
            </tr>
            </tbody>
        </table>
    );
};

export default TablesWithGrid;
