import React from 'react';

const DataTables = {
    data: [
        {
            title: {
                title: 'Посмотреть исходный код таблицы'
            },

            description: {
              text: `Привет, привет <mark>Hi</mark>`
            },

            templatesCode: {

                html: {
                    lang: 'jsx',
                    code: `<table className={styles.table}>
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
</table>`
                },
                css: {
                    lang: 'css',
                    code: `.table {
  border-collapse: collapse;
  margin: 0 0 24px 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  & thead {
    background-color: #25282a;
    font-weight: 400;
    text-transform: none;
  }

  & tr {
    border: 1px solid rgba(85, 95, 98, 0.45);
    padding: .35em;
  }

  .body tr:nth-child(even) {
    background-color: #25282a;
  }

  & th,
  & td {
    padding: .625em;
    text-align: center;
    font-weight: 300;
  }

  & th {
    font-size: .85em;
    letter-spacing: .1em;
    font-weight: 500;
  }
}

@media screen and (max-width: 767px) {
  .table {
    border: 0;

    & thead {
      display: none;
      visibility: hidden;
    }

    & tr {
      border-bottom: 2px solid rgba(85, 95, 98, 0.45);
      display: block;
      margin-bottom: .625em;
    }

    & td {
      border-bottom: 1px solid rgba(85, 95, 98, 0.45);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .8em;
      text-align: right;
    }

    & td::before {
      content: attr(data-label);
      font-weight: bold;
      text-transform: uppercase;
    }

    & td:last-child {
      border-bottom: 0;
    }
  }
}`
                }
            }

        },

        {
            title: {
                title: 'Посмотреть исходный код таблицы'
            },

            templatesCode: {

                html: {
                    lang: 'jsx',
                    code: `<table className={styles.tableWithGrid}>
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
</table>`
                },
                css: {
                    lang: 'css',
                    code: `.tableWithGrid {
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns:
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr);
  margin-bottom: 24px;

  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 9px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-collapse: collapse;
  }

  th {
    position: sticky;
    top: 0;
    background-color: #25282a;
    text-align: left;
    font-weight: normal;
    font-size: 1.1rem;
    color: white;
  }

  th:last-child {
    border: 0;
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 300;
  }

  tr:nth-child(even) td {
    background: #25282a;
  }
}

@media screen and (max-width: 767px) {
  .tableWithGrid {
    grid-template-columns: 1fr;

    & td {
      border-bottom: 1px solid rgba(85, 95, 98, 0.45);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .8em;
      text-align: right;
    }

    & tr {
      border-bottom: 2px solid rgba(85, 95, 98, 0.45);
      display: block;
      margin-bottom: .625em;
    }

    thead {
      display: none;
      visibility: hidden;
    }

    & td::before {
      content: attr(data-label);
      font-weight: bold;
      text-transform: uppercase;
    }
  }
}`
                }
            }

        },

        {
            title: {
                title: 'Посмотреть исходный код таблицы'
            },

            templatesCode: {

                html: {
                    lang: 'jsx',
                    code: `<div className={styles.gridTable}>
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
</div>`
                },
                css: {
                    lang: 'css',
                    code: `.gridTable {
  .table {
    display: grid;
    background-color: #25282a;
    grid-template-columns:
          minmax(150px, 1fr)
          minmax(150px, 1fr)
          minmax(150px, 1fr);
  }

  .heading {
    padding: 9px;
  }

  .rowGroup {
    display: grid;
    grid-template-columns:
          minmax(150px, 1fr)
          minmax(150px, 1fr)
          minmax(150px, 1fr);
  }
  .rowGroup:nth-child(odd) {
    background: #25282a;
  }
  .row {
    padding: 9px;
  }
}

@media screen and (max-width: 767px) {
  .gridTable {

    .table {
      display: none;
      visibility: hidden;
    }

    .rowGroup {
      grid-template-columns: 1fr;
      border-bottom: 2px solid rgba(85, 95, 98, 0.45);
      display: block;
      margin-bottom: .625em;
    }


    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(85, 95, 98, 0.45);
      font-size: .8em;
      text-align: right;
    }

    .row::before {
      content: attr(data-label);
      font-weight: bold;
      text-transform: uppercase;
    }
  }
}`
                }
            }

        },
    ]
}

export default DataTables
