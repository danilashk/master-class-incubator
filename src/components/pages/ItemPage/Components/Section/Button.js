import React, {useState} from 'react';
import styles from "./Styles.module.scss";
import CustomizedAccordions from "../../../../MUI/Accordeon/Accordeon";
import DataButton from "../../../../../data/dataComponents/dataButton";

const Button = () => {
    const [errorBtn, setErrorBtn] = useState('Button Text')
    const [btn, setBtn] = useState('Button Text')
    return (
        <>
            <h1 className={styles.pageTitle}>Кнопки</h1>
            <p className={styles.text}>Одним из первых элементов, который мы замечаем на сайте, является кнопка. Как правило, на сайте их
                бесчисленное количество, и эта та самая компонента которую зачастую создают первой. Здесь мы разберем
                такой
                нюанс, как сделать одну кнопку адаптивной под все запросы дизайнера.</p>

            <p className={styles.text}>Но сперва, давайте разберем вечный вопрос, что же использовать ссылки <mark>{'<a href=""/>'}</mark> или
                кнопки <mark>{'<button/>'}</mark></p>

            <span className={styles.subtitle}>Вот что могут делать кнопки:</span>
            <ul className={styles.list}>
                <li>Получать фокус с клавиатуры по умолчанию</li>
                <li>Делать «клик» по нажатию на пробел</li>
                <li>Блокироваться с помощью атрибута <mark>disabled</mark></li>
                <li>Давать подсказку скринридеру с помощью неявного атрибута <mark>role="button"</mark></li>
                <li>Показывать
                    состояния <mark>∶focus</mark>, <mark>∶hover</mark>, <mark>∶active</mark>, <mark>∶disabled</mark>
                </li>
            </ul>

            <span className={styles.subtitle}>А вот что могут делать ссылки:</span>
            <ul className={styles.list}>
                <li>Перевести пользователя на новую страницу или окно</li>
                <li>Изменять URL</li>
                <li>Вызвать браузерные перерисовку/перезагрузку</li>
                <li>Способны принимать фокус по умолчанию с помощью атрибута <mark>href</mark></li>
                <li>Регистрируют клик с помощью клавиши Enter</li>
                <li>Не блокируются как кнопки, но их можно сделать неактивными с
                    помощью <mark>tabindex="-1"</mark> и <mark>aria-hidden="true"</mark></li>
                <li>Показывать
                    состояния <mark>∶link</mark>, <mark>∶visited</mark>, <mark>∶focus</mark>, <mark>∶hover</mark>, <mark>∶active</mark>
                </li>
            </ul>
            <p className={styles.text}>
                Лично для меня самое главное различие между ссылкой и кнопкой — то, что ссылки перемещают пользователя
                на новый ресурс, унося его из текущего контекста (внутренние ссылки — единственная загвоздка здесь).
                Кнопка переключает что-то в интерфейсе, например, видео-плеер, или вызывает новый контент в том же самом
                контексте.
            </p>

            <p className={styles.text}>
                Итак, вернемся к вопросу адаптивности, хорошей практикой является создание отдельной компоненты Button
                внутри которой лежит исключительно тег <mark>{'<button>Внутренность кнопки</button>'}</mark>, данной
                кнопке мы задаем свойство <mark>width = 100%</mark>
                <br/>
                Данным свойством мы позволяем кнопке растягиваться на 100% относительно родительского блока, чуть ниже
                разберем, зачем мы это делаем.
            </p>
            <button className={styles.simpleButton}>Внутренность кнопки</button>
            <span className={styles.subtitle}>Сперва рассмотрим неправильный вариант:</span>
            <p className={styles.text}>Не забываем что наша кнопка - отдельная компонента <mark>Button</mark> которую мы должно
                где-то отрисовать, отрисуем приходящую компоненту внутри
                тега <mark>{'<div class="btnBox"> <Button/> </div>'}</mark></p>
            <p className={styles.text}>
                Зададим ей ограничивающий класс <mark>"btnBox"</mark>, посмотрим на размер кнопки в макете и зададим его
                классу, пусть это будет <mark>{'width: 150px'}</mark>
                <br/>
                Проблема данного способа, в полной не адаптивности кнопки, вы должны учитывать, что позже эта кнопка
                может быть на другом языке где слово станет длиннее/короче или вовсе, текст кнопки изменится. Ниже,
                в <mark>{'input'}</mark> вы можете взаимодейстововать с текстом внутри кнопки, и увидеть минусы данного
                способа
            </p>
            <div style={{width: '150px'}}>
                <button style={{width: '100%', height: '38px'}} className={styles.btn3}>{errorBtn}</button>
            </div>
            <input className={styles.input} placeholder={'Введите текст в кнопке'} type="text" onChange={(e) => setErrorBtn(e.target.value)}/>

            <div>
                <h2 className={styles.title}>Адаптивная кнопка</h2>
                <p className={styles.text}>Сейчас мы сделаем шаблон правильной кнопки. Для начала, посмотрите на свой макет. Дизайнер создает
                    все кнопки по одному паттерну, и у ваших кнопок должно быть одинаковым
                    свойство <mark>{'padding'}</mark>, примените его.
                    <br/>
                    Теперь поработаем с нашим классом <mark>{'btnBox'}</mark>, применим на него
                    свойство <mark>{'max-width: fit-content'}</mark>, которое сделает наш контейнер зависимым от
                    контента, так же зададим <mark>{'overflow: hidden'}</mark>
                    <br/>
                    Самой кнопке, мы зададим минимальную высоту и свойство <mark>{'word-break: break-all'}</mark>,
                    данное свойство позволяет переносить строку если она длиннее нашего компонента. Так же, я сделал
                    минимальную ширину для нашей кнопки в 48px. Это сделано для красивого отображения коротких кнопок,
                    например "OK".
                    <br/>
                    Результат готовой кнопки и ее структуру, вы можете увидеть ниже, так же вы можете взаимодействовать
                    с ее текстовым
                    содержимым.
                </p>
                <div className={styles.btnBox}>
                    <button className={styles.btn}>{btn}</button>
                </div>
                <input className={styles.input} placeholder={'Введите текст в кнопке'} type="text" onChange={(e) => setBtn(e.target.value)}/>

                <CustomizedAccordions descriptionStatus={false} title={DataButton.data[0].title}
                                      jsxCode={DataButton.data[0].templatesCode.html.code}
                                      jsxLanguage={DataButton.data[0].templatesCode.html.lang}
                                      cssCode={DataButton.data[0].templatesCode.css.code}
                                      cssLanguage={DataButton.data[0].templatesCode.css.lang}/>
            </div>

            <span style={{marginTop: '12px', display: 'inline-block'}} className={styles.subtitle}>Стилизация состояний у кнопки</span>
            <p className={styles.text}>Сейчас мы поговорим о таких состояних у кнопки,
                как: <mark>:hover</mark>, <mark>:focus</mark> и <mark>:active</mark>. Зачастую их стилизуют через
                запятую, но вы должны понимать, что это разные состояния, с разными стилями.
            </p>
            <p className={styles.text}>
                <mark>:hover</mark> срабатывает, когда пользователь наводит на элемент курсор мыши.
                Обычно это состояние заключается в изменении цвета фона <mark>background-color</mark> и/или
                текста <mark>color</mark>, так же допускается изменения свойства <mark>border</mark>. Различия не
                обязательно должны быть очевидными, потому что пользователи и так знают, что навели курсор на какой-то
                элемент.
            </p>

            <p className={styles.text}>
                <mark>:focus</mark> срабатывает, когда элемент получает фокус. Это достигается двумя способами:
                <ul className={styles.list}>
                    <li>при выборе элемента кнопкой «Tab»</li>
                    <li>при щелчке на элемент мышью</li>
                </ul>
                Стилизуя состояние фокуса, мы больше заботимся о пользователях, работающих с интерфейсом с клавиатуры,
                чем о тех, кто использует мышь.
                <br/>
                Когда пользователи нажимают «Tab», они не знают, к какому элементу перейдет фокус, а могут лишь
                предполагать. Вот почему нам нужно заметное изменение состояния — чтобы привлечь внимание пользователя
                на сфокусированный элемент.
                <br/>
                В большинстве случаев оформление фокуса по умолчанию вполне подходит. Если вы хотите стилизовать его
                по-своему, помните об этих четырёх моментах:
                <br/>
                <ul className={styles.list}>
                    <li>Добавление обводки <mark>outline</mark></li>
                    <li>Изменение <mark>background</mark></li>
                    <li>Изменение текста <mark>color</mark></li>
                </ul>
            </p>

            <p className={styles.text}>
                <mark>:active</mark> при взаимодействии с чем-то в реальной жизни, вы ожидаете своего рода отклик. Например, при надавливании
                на кнопку, вы ожидаете, что она нажмётся. Вызывается это состояние, когда вы взаимодействуете с
                элементом. Под взаимодействием в данном случае подразумевается:
                <ul className={styles.list}>
                    <li>Удержание левой кнопки мыши на элементе (даже когда он не в фокусе)</li>
                    <li>Удержание кнопки пробела (на кнопках)</li>
                </ul>
                В данном случае мы стилизуем все три
                свойства: <mark>background</mark>, <mark>border</mark> и <mark>color</mark>
            </p>
        </>
    );
};

export default Button;
