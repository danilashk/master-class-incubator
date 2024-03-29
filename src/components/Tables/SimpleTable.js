import React from 'react';
import styles from './Tables.module.scss'

const SimpleTable = () => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th scope="col">Account</th>
                <th scope="col">Due Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Period</th>
            </tr>
            </thead>
            <tbody className={styles.body}>
            <tr>
                <td data-label="Account">Visa - 3412</td>
                <td data-label="Due Date">04/01/2016</td>
                <td data-label="Amount">$2,190</td>
                <td data-label="Period">03/01/2016 - 03/31/2016</td>
            </tr>
            <tr>
                <td scope="row" data-label="Account">Visa - 6076</td>
                <td data-label="Due Date">03/01/2016</td>
                <td data-label="Amount">$2,443</td>
                <td data-label="Period">02/01/2016 - 02/29/2016</td>
            </tr>
            <tr>
                <td scope="row" data-label="Account">Visa - 7412</td>
                <td data-label="Due Date">03/01/2016</td>
                <td data-label="Amount">$2,222</td>
                <td data-label="Period">02/01/2016 - 02/29/2016</td>
            </tr>
            <tr>
                <td scope="row" data-label="Acount">Visa - 3412</td>
                <td data-label="Due Date">02/01/2016</td>
                <td data-label="Amount">$2,443</td>
                <td data-label="Period">02/01/2016 - 02/29/2016</td>
            </tr>
            </tbody>
        </table>
    );
};

export default SimpleTable;
