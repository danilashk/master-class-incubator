import React, {useEffect, useState} from 'react';
import styles from './FlexOrGrid.module.scss'
import Header from "../../../Header/Header";
import {useLocation} from "react-router-dom";
import Notification from "../../../notification/Notification";
import UseNotificationHook from "../../../../hooks/notification.hook";
import FullWidthTabs from "../../../MUI/Tabs/Tabs";
import DataGrids from "../../../../data/dataGrids";

const FlexOrGrid = () => {
    const {show, setShow, location} = UseNotificationHook()
    return (
        <>
            <div className="transition">
            <div className={styles.wrapper}>
            <Header setShow={setShow} status={true}/>
            <div style={{padding: '0 12px'}}>
                <h1 className={styles.title}>Grid и flexbox</h1>
                <p className={styles.text}> Основное различие между CSS Grid Layout и CSS Flexbox Layout в том, что
                    flexbox предназначен для
                    позиционирования элементов в одном направлении, то есть, либо в строке, либо в колонке. Grid же был
                    разработан для позиционирования элементов в двумерной системе, то есть, для одновременного
                    позиционирования и в строке, и в колонке. Однако, в двух спецификациях есть некоторые общие черты, и
                    если вы уже научились укрощать flexbox, вы увидите сходства, которые помогут вам разобраться и с
                    Grid.</p>

                <h2 className={styles.subTitle}>Одномерное vs Двумерное позиционирование</h2>
                <p className={styles.text}>
                    Простой пример поможет нам продемонстрировать разницу между одно- и двумерным позиционированием.

                    В пером примере мы воспользуемся flexbox для того, чтобы разместить несколько блоков. Предположим,
                    что у нас есть пять дочерних элементов в контейнере, зададим им значения flex-свойств таким образом,
                    чтобы их размер увеличивался и уменьшался, начиная с базового в 200px.

                    Также установим свойство <mark>flex-wrap</mark> в значение <mark>wrap</mark>. Это приведёт к тому,
                    что если свободного
                    пространства в нашем контейнере будет не хватать для размещения элемента в 200px, наши элементы
                    спокойно перейдут на новую строку.
                </p>
                <div className={styles.commonBox}>
                    <FullWidthTabs jsxLanguage={DataGrids.data[0].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[0].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[0].templatesCode.html.lang}
                                   cssCode={DataGrids.data[0].templatesCode.css.code}
                    />
                    <p className={styles.text}>На картинке вы видите, что два элемента перешли на новую строку. Эти
                        элементы поделили свободное
                        пространство между собой, а не выровнялись по элементам над ними. Происходит это потому, что
                        каждая новая строка (или колонка, если мы работаем с колонками) становится новым
                        flex-контейнером. А во flex-контейнере распределение свободного пространства действует в рамках
                        всей строки. </p>
                    <div className={styles.wrapper1}>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                        <div>Four</div>
                        <div>Five</div>
                    </div>
                </div>
                <div className={styles.commonBox}>
                    <h2 className={styles.subTitle}>Тот же макет, но с CSS гридами</h2>
                    <p className={styles.text}>В примере ниже мы создаём тот же самый макет, но используя гриды. На этот
                        раз у нас три
                        трека-колонки шириной в <mark>1fr</mark>. И при этом нам не требуется задавать какие-либо
                        свойства дочерним
                        элементам, потому что они самостоятельно занимают по одной ячейке созданного грида. Как видите,
                        наши элементы лежат в жёсткой сетке и выравниваются и по строке, и по колонке. Поскольку у нас
                        пять элементов, в результате мы получаем пустую ячейку в конце второй строки.
                    </p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[1].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[1].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[1].templatesCode.html.lang}
                                   cssCode={DataGrids.data[1].templatesCode.css.code}
                    />
                    <div className={styles.wrapper2}>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                        <div>Four</div>
                        <div>Five</div>
                    </div>
                    <p className={styles.text}>
                        Если вы колеблетесь, что выбрать - flexbox или grid, задайте себе простой вопрос:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            нужно управлять размещением элементов в строке <mark>или</mark> в колонке - используем
                            flexbox
                        </li>
                        <li>
                            нужно управлять размещением элементов в строке <mark>и</mark> в колонке – используем grid
                        </li>
                    </ul>
                </div>

                <div className={styles.commonBox}>
                    <h2 className={styles.subTitle}>Выравнивание блоков</h2>
                    <p className={styles.text}>
                        Дальше в нашем руководстве мы подробно рассмотрим выравнивание блоков Box Alignment и то, как
                        оно работает в Grid Layout, а здесь давайте рассмотрим два простых примера, и сравним flexbox и
                        гриды.

                        В первом примере, использующем flexbox, у нас есть контейнер с тремя элементами. Для
                        блока-обёртки wrapper установлено свойство <mark>min-height</mark>, и оно задаёт высоту
                        flex-контейнера. Мы
                        установили свойство <mark>align-items</mark> flex-контейнера в значение flex-end , поэтому
                        элементы
                        выравниваются по концу flex-контейнера. Мы также установили значение
                        свойства <mark>align-self</mark> для
                        box1 таким образом, что оно перезапишет поведение по умолчанию и заставит наш блок растянутся на
                        всю высоту контейнера. Для box2 свойство <mark>align-self</mark> установлено таким образом, что
                        блок
                        перепрыгнет в начало flex-контейнера.
                    </p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[2].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[2].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[2].templatesCode.html.lang}
                                   cssCode={DataGrids.data[2].templatesCode.css.code}
                    />
                    <div className={styles.wrapper3}>
                        <div className={styles.box1}>One</div>
                        <div className={styles.box2}>Two</div>
                        <div className={styles.box3}>Three</div>
                    </div>
                </div>

                <div className={styles.commonBox}>
                    <h2 className={styles.subTitle}>Тем временем в параллельной вселенной: выравнивание в CSS
                        Гридах</h2>
                    <p className={styles.text}>
                        Второй пример использует грид, чтобы создать тот же самый макет, и на этот раз мы рассмотрим то,
                        как свойства выравнивания блоков применяются к гридам. Вместо flex-start и flex-end мы
                        задаём <mark>start</mark> и <mark>end</mark>. В случае с макетом на гридах мы выравниваем
                        элементы внутри их грид-области, в
                        данном примере - это одна единственная грид-ячейка, но в целом грид-область может состоять из
                        нескольких грид-ячеек.
                    </p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[3].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[3].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[3].templatesCode.html.lang}
                                   cssCode={DataGrids.data[3].templatesCode.css.code}
                    />
                    <div className={styles.wrapper4}>
                        <div className={styles.item1}>One</div>
                        <div className={styles.item2}>Two</div>
                        <div className={styles.item3}>Three</div>
                    </div>
                </div>
                <h2 className={styles.subTitle}>
                    Как работают auto-fill и auto-fit в CSS Grid
                </h2>
                <div className={styles.commonBox}>
                    <p className={styles.text}>
                        <mark>Auto-fill</mark>
                        и <mark>auto-fit</mark> это очень полезные инструменты при работе с CSS Grid и создании
                        адаптивного
                        шаблона.
                        <br/>
                        Сейчас мы посмотрим на ещё одну фичу в CSS Grid, которая поможет вам в создании адаптивного
                        шаблона:
                        это auto-fill и auto-fit. Эти два слова могут использоваться как значения при указании ширины
                        колонок в CSS Grid.
                        У них очень схожие названия и их поведение тоже очень схоже, но у них всё-таки есть небольшие
                        различия. Сейчас попытаемся вам их объяснить, начнем с простого кода:
                    </p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[4].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[4].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[4].templatesCode.html.lang}
                                   cssCode={DataGrids.data[4].templatesCode.css.code}
                    />
                    <div className={styles.wrapper5}>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                    </div>
                </div>


                <div className={styles.commonBox}>
                    <p className={styles.text}>
                        Дальше мы собираемся использовать CSS функцию <mark>repeat()</mark>, которая позволяет
                        определять множество
                        колонок или строк (используя grid-template-columns и grid-template-rows) в более укороченном
                        варианте. Первый параметр это число повторений, а второй это то, что вы собираетесь повторять:
                    </p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[5].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[5].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[5].templatesCode.html.lang}
                                   cssCode={DataGrids.data[5].templatesCode.css.code}
                    />
                    <div className={styles.wrapper15}>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                    </div>
                    <p className={styles.text}>
                        И тут auto-fill и auto-fit помогут вам в создании куда более динамичных шаблонов.
                    </p>
                </div>

                <h2 className={styles.subTitle}>Auto-fill</h2>
                <div className={styles.commonBox}>
                    <p className={styles.text}>
                        Вместо того, чтобы указывать количество колонок и сколько раз им повторяться, мы просто можем
                        сказать браузеру, чтобы он уместил как можно больше колонок с учетом указанной длины.
                        auto-fill как бы говорит “я автоматически заполню строку таким количеством колонок, как это
                        возможно
                        с учетом заданной ширины”. <mark>auto-fill</mark> используется в связке
                        с <mark>repeat()</mark> таким образом:
                    </p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[6].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[6].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[6].templatesCode.html.lang}
                                   cssCode={DataGrids.data[6].templatesCode.css.code}
                    />
                    <div className={styles.wrapper16}>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                    </div>
                    <p className={styles.text}>
                        Как вы видите, каждая строка заполнена возможным количеством колонок, учитывая их длину в 300px.
                        Когда в строке не остается места, то элементы переходят на следующую строку.
                    </p>
                </div>
                <h2 className={styles.subTitle}>Minmax</h2>
                <div className={styles.commonBox}>
                    <p className={styles.text}>
                        <mark>minxmax()</mark>
                        функция в CSS, которую очень удобно использовать в связке с
                        <mark>auto-fill</mark>. Она позволяет
                        вам указывать минимальное и максимальное значение одновременно. Если нам надо, чтобы колонки
                        были минимум в 300px и максимум в 1fr (Оставшееся доступное место. Подробнее про неё можете
                        прочитать тут. Что такое единица гибкости fr в CSS, доступным и простым языком), то колонки
                        автоматически получат размер, чтобы заполнить строку:
                    </p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[7].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[7].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[7].templatesCode.html.lang}
                                   cssCode={DataGrids.data[7].templatesCode.css.code}
                    />
                    <div className={styles.wrapper17}>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                    </div>
                    <p className={styles.text}>Сейчас браузер уместит в строку столько колонок с минимальной шириной в
                        300px, сколько он сможет.
                        А если останется ещё место, то оно будет поровну распределено между всеми автозаполненными
                        колонками.</p>
                </div>

                <h2 className={styles.subTitle}>Auto-fit</h2>
                <div className={styles.commonBox}>
                    <p className={styles.text}>А давайте поменяем auto-fill и auto-fit местами, в первом примере с
                        auto-fill</p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[8].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[8].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[8].templatesCode.html.lang}
                                   cssCode={DataGrids.data[8].templatesCode.css.code}
                    />
                    <div className={styles.wrapper18}>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                    </div>
                    <p className={styles.text}>Не такая уж и большая разница в сравнении с <mark>auto-fill</mark>. Но
                        явное различие
                        появится тогда, когда вы
                        укажете браузеру, что делать с оставшимся местом в строке.
                    </p>
                </div>

                <h2 className={styles.subTitle}>Minmax</h2>
                <div className={styles.commonBox}>
                    <p className={styles.text}>Итак, давайте снова добавим minmax():</p>
                    <FullWidthTabs jsxLanguage={DataGrids.data[9].templatesCode.html.lang}
                                   jsxCode={DataGrids.data[9].templatesCode.html.code}
                                   cssLanguage={DataGrids.data[9].templatesCode.html.lang}
                                   cssCode={DataGrids.data[9].templatesCode.css.code}
                    />
                    <div className={styles.wrapper19}>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                    </div>
                    <p className={styles.text}>auto-fit будет вести себя почти как auto-fill, но если есть только одна
                        строка и есть место для
                        дополнительных колонок, но нет элементов, которые можно вставить эти колонки, то тогда он
                        сделает ширину пустых колонок равную нулю. А если выставить максимальную ширину колонок
                        на <mark>1fr</mark>,
                        то браузер разделит оставшееся место поровну между ними.
                    </p>
                </div>
            </div>
            {show ? <Notification description={'На данной странице мы разберем такие особенности Гридов которые не встречаются на первой странице документации. Можно ли их сделать адаптивными как флексы, да и в чем их вообще отличие от флексов? Здесь вы найдете ответы'} url={location.pathname} setShow={setShow}/> : null}
            </div>
            </div>
        </>
    );
};

export default FlexOrGrid;
