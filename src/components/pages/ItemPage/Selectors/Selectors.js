import styles from './Selectors.module.scss'
import Header from "../../../Header/Header";
import * as React from 'react';
import CustomizedAccordions from "../../../MUI/Accordeon/Accordeon";
import DataSelectors from "../../../../data/dataSelectors";
import {useLocation} from "react-router-dom";
import Notification from "../../../notification/Notification";


const Selectors = (props) => {
    const location = useLocation()
    const posts = DataSelectors.data.map((i) => {
        return (
            <CustomizedAccordions
                title={i.title.textOfTitle}
                result={i.result.code}
                jsxLanguage={i.templatesCode.html.lang}
                jsxCode={i.templatesCode.html.code}
                cssLanguage={i.templatesCode.css.lang}
                cssCode={i.templatesCode.css.code}
                description={i.description.text}
            />
        )
    })
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
        <>
            <div className={styles.container}>
                <Header/>
                <main className={styles.main}>
                    <section>
                        <h1 className={styles.pageTitle}>Селекторы</h1>
                        <div className={styles.posts}>
                            {posts}
                        </div>
                    </section>
                </main>
            </div>
            <Notification url={location.pathname}/>
        </>

    )
};


export default Selectors;
