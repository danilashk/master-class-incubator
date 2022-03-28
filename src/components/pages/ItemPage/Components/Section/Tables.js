import React from 'react';
import SimpleTable from "../../../../Tables/SimpleTable";
import CustomizedAccordions from "../../../../MUI/Accordeon/Accordeon";
import TablesWithGrid from "../../../../Tables/TablesWithGrid";
import styles from "./Styles.module.scss";
import GridTable from "../../../../Tables/GridTable";
import DataTables from "../../../../../data/dataComponents/dataTables";

const Tables = () => {
    return (
        <>
            <h1 className={styles.pageTitle}>Таблицы</h1>
            <p className={styles.text}>
                На данной странице собраны несколько вариантов исполнения таблиц в современной верстке. Раньше верстка
                таблиц была
                возможна исключительно с помощью табличной верстки, сейчас ее постепенно начинает
                вытеснять <mark>Grid</mark>, но это не значит, что мы должны забывать про старую табличную верстку.
            </p>
            <div className={styles.component}>
                <h2 className={styles.subtitle}>Классическая таблица</h2>
                <p className={styles.text}>Первым вариантом мы так раз таки и рассмотрим табличную верстку. Найти основы
                    верстки
                    таблиц вы сможете по первой же ссылке в поисковике, в этом же примере, я хочу уделить внимание
                    такому серьезному вопросу как адаптивность.
                    <br/>
                    На многих проектах, где таблицы хотят адаптировать под мобильное устройство, но при этом не хотят
                    оставлять скролл вправо, разработчики сталкиваются с таким вопросом: "Как же адаптировать таблицу?".
                    И ведь действительно, на многих сайтах шапка таблицы при мобильной верстке отрисовается к каждой
                    ячейке, когда на дектопе это происходит только один раз.
                    <br/>
                    Зачастую, разработчики делают две разные таблицы, и от ширины экрана отрисовывают нужную им таблицу,
                    но я хочу показать вам адаптивный метод, который будет применяться ко всем таблицам на этой странице
                    ниже.
                    <br/>
                    Если вы откроете исходный код таблицы HTML, то обратите внимание, что для каждого элемента ячейки
                    таблицы, я задаю атрибут <mark>data-label</mark>, а дальше дело за малым.
                    <br/>
                    Создаем @media-запрос под определенное разрешение экрана. Убираем показ
                    нашего <mark>thead</mark> для пользователя с помощью свойства <mark>display: none</mark>. Создаем
                    для нашей <mark>td</mark> псевдоэлемент <mark>:before</mark>, и внутри контента указываем, что его
                    текстом будет наш атрибут <mark>content: attr(data-label)</mark>. Расскидываем флексами по сторонам
                    наш атрибут и значение - таблица готова!
                    <br/>
                    Результат вы можете увидеть у себя на экране уменьшив окно браузера.
                </p>
                <SimpleTable/>
                <CustomizedAccordions descriptionStatus={false} title={DataTables.data[0].title.title}
                                      jsxCode={DataTables.data[0].templatesCode.html.code}
                                      jsxLanguage={DataTables.data[0].templatesCode.html.lang}
                                      cssCode={DataTables.data[0].templatesCode.css.code}
                                      cssLanguage={DataTables.data[0].templatesCode.css.lang}/>
            </div>

            <div className={styles.component}>
                <h2 className={styles.subtitle}>Классическая таблица с гридами</h2>
                <p className={styles.text}>
                    Но иногда все таки хочется совместить старые семантические верные теги применив к ним современные
                    гриды. Такое тоже стало возможно. Все чаще на просторах начинают встречаться именно такие варианты
                    создания таблиц.
                    <br/>
                    Первым делом применяем <mark>display:grid</mark> к <mark>{'<table>'}</mark>, чтобы превратить
                    таблицу в сетку. Это ничего не
                    сломает: если браузер не поддерживает Grid, то применит <mark>display:table</mark>, а значит данный
                    способ все еще подходит для IE. Дочерние
                    элементы <mark>{'<thead>'}</mark> и <mark>{'<tbody>'}</mark> становятся элементами сетки.
                    <br/>
                    Затем мы используем волшебное правило <mark>grid-template-columns</mark> для управления элементами
                    сетки. Да, всего одна строка CSS. Используем одинаковый минимальный размер для всех колонок, но
                    максимальное значение (fr) определяется типом данных столбца.
                    <br/>
                    Вот и все, наша таблица готова, она все так же хороша для скринридеров, но при этом с помощью гридов
                    мы смогли сделать ее колонки более гибкими для нас.
                </p>
                <TablesWithGrid/>
                <CustomizedAccordions descriptionStatus={false} title={DataTables.data[1].title.title}
                                      jsxCode={DataTables.data[1].templatesCode.html.code}
                                      jsxLanguage={DataTables.data[1].templatesCode.html.lang}
                                      cssCode={DataTables.data[1].templatesCode.css.code}
                                      cssLanguage={DataTables.data[1].templatesCode.css.lang}/>
            </div>

            <div className={styles.component}>
                <p className={styles.text}>
                    Так же, вы можете дополнительно улучшать вашу таблицу. В данном примере использована таблица из
                    прошлого примера, но при этом уменьшен размер контейнера в котором она находится. Проскрольте данную
                    таблицу и увидите, что "шапка" всегда остается сверху, данного эффекта можно добиться при помощи
                    свойства <mark>position: sticky</mark>, в примере выше оно указано в исходном коде.
                </p>
                <h2 className={styles.subtitle}>Таблица с "липким" верхом</h2>
                <div className={styles.componentHeight}>
                    <TablesWithGrid/>
                </div>
            </div>

            <div className={styles.component}>
                <h2 className={styles.subtitle}>Таблица на чистых гридах</h2>
                <p>И последний вариант таблицы. Здесь мы будем использовать исключительно гриды
                    и <mark>div</mark> (да-да, IE нас не
                    поймет). Для чего нужны такие таблицы? Как правило их создаю в ситуациях, когда у нас на сайте
                    присуствует очень мелкая таблица с несколькими пунктами.
                    <br/>
                    Понятной для пользователя мы ее делаем с помощью атрибута <mark>role</mark> внутри которого мы
                    указываем значение этой <mark>div</mark> в структуре страницы.
                </p>
                <GridTable/>
                <CustomizedAccordions descriptionStatus={false} title={DataTables.data[2].title.title}
                                      jsxCode={DataTables.data[2].templatesCode.html.code}
                                      jsxLanguage={DataTables.data[2].templatesCode.html.lang}
                                      cssCode={DataTables.data[2].templatesCode.css.code}
                                      cssLanguage={DataTables.data[2].templatesCode.css.lang}/>
            </div>

        </>
    );
};

export default Tables;
