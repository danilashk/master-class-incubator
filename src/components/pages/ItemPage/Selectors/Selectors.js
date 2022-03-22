import * as React from 'react';
import styles from './Selectors.module.scss'
import Header from "../../../Header/Header";
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Selectors = () => {
    return (
        // <div className={styles.container}>
        //     <Header/>
        //     <main className={styles.main}>
        //         <section>
        //             <h1 className={styles.pageTitle}>Селекторы</h1>
        //             <div className={styles.posts}>
        //                 <div className={styles.post}>
        //                     <h2>Селектор вложенностей</h2>
        //                     <div>
        //                         <ul>
        //                             <li className={styles.sel1}><a href="">Link</a></li>
        //                             <li className={styles.sel1}><a href="">Link</a></li>
        //                             <li className={styles.sel1}><a href="">Link</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className={styles.post}>
        //                     <h2>Соседний селектор +</h2>
        //                     <div>
        //                         <ul className={styles.sel2}>
        //                             <li><a href="">Link</a></li>
        //                             <li><a href="">Link</a></li>
        //                         </ul>
        //                         <span>Первый элемент </span>
        //                         <span>Второй элемент</span>
        //                     </div>
        //                 </div>
        //                 <div className={styles.post}>
        //                     <h2>Селектор ></h2>
        //                     <div className={styles.sel3}>
        //                         <ul>
        //                             <li> List Item
        //                                 <ul>
        //                                     <li> Child</li>
        //                                 </ul>
        //                             </li>
        //                             <li> List Item</li>
        //                             <li> List Item</li>
        //                             <li> List Item</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className={styles.post}>
        //                     <h2>Селектор ~</h2>
        //                     <div>
        //                         <ul className={styles.sel4}>
        //                             <li><a href="">Link</a></li>
        //                             <li><a href="">Link</a></li>
        //                             <li><a href="">Link</a></li>
        //                         </ul>
        //                         <span>Первый элемент </span>
        //                         <span>Второй элемент</span>
        //                     </div>
        //                 </div>
        //                 <div className={styles.post}>
        //                     <h2>Регулярное в селекторах *</h2>
        //                     <div>
        //                         <ul className={styles.sel5}>
        //                             <li><a href="https://www.google.com/">Link</a></li>
        //                             <li><a href="https://www.yandex.ru/">Link</a></li>
        //                             <li><a href="https://www.google.com/">Link</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className={styles.post}>
        //                     <h2>Регулярное в селекторах $</h2>
        //                     <div>
        //                         <ul className={styles.sel6}>
        //                             <li><a href="https://www.google.com/">Link</a></li>
        //                             <li><a href="https://www.yandex.ru">Link</a></li>
        //                             <li><a href="https://www.google.com/">Link</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className={styles.post}>
        //                     <h2>Селектор :not</h2>
        //                     <div>
        //                         <ul className={styles.sel7}>
        //                             <li><a href="">Link</a></li>
        //                             <li><a href="">Link</a></li>
        //                             <li><a href="">Link</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className={styles.post}>
        //                     <h2>Селектор only child></h2>
        //                     <div>
        //                         <ul className={styles.sel8}>
        //                             <li>List Item</li>
        //                         </ul>
        //                         <ul className={styles.sel8}>
        //                             <li>List Item</li>
        //                             <li>List Item</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className={styles.post}>
        //                     <h2>Селектор четности</h2>
        //                     <div>
        //                         <ul>
        //                             <li className={styles.sel9}><a href="">Link</a></li>
        //                             <li className={styles.sel9}><a href="">Link</a></li>
        //                             <li className={styles.sel9}><a href="">Link</a></li>
        //                             <li className={styles.sel9}><a href="">Link</a></li>
        //                             <li className={styles.sel9}><a href="">Link</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </section>
        //     </main>
        // </div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
};


export default Selectors;
