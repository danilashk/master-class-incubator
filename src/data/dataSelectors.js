import React from 'react';
import styles from './dataSelectors.module.scss'

const DataSelectors = {
    data: [
        {
            title: {
                textOfTitle: 'Селектор вложенностей',
                selectorType: null
            },

            result: {
                code: <ul>
                    <li class={styles.sel1}><a href="">Link</a></li>
                    <li className={styles.sel1}><a href="">Link</a></li>
                    <li className={styles.sel1}><a href="">Link</a></li>
                    <a href="">Link</a>
                </ul>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<ul>
    <li class='sel1'>
        <a>Link</a>
    </li>
    <li class='sel1'>
        <a>Link</a>
    </li>
    <li class='sel1'>
        <a>Link</a>
    </li>
    <a>Link</a>
</ul>`
                },

                css: {
                    lang: 'css',
                    code: `.sel1 a {
  color: #3598db;
}`
                },

            },

            description: {
                text: 'Один из часто используемых типов селекторов - это контекстный селектор. Он используется для выбора элементов, удовлетворяющих определённому контексту. Например, вместо того, чтобы задавать стиль всем ссылкам, вам нужно изменить отображение только тех ссылок, которые расположены внутри несортированного списка.'
            }
        },

        {
            title: {
                textOfTitle: 'Соседний селектор',
                selectorType: <mark>+</mark>
            },

            result: {
                code:<><ul className={styles.sel2}>
                    <li><a href="">Link</a></li>
                    <li><a href="">Link</a></li>
                </ul>
                <span>Первый элемент</span> <span>Второй элемент</span>
        </>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<ul class='sel2'>
    <li><a>Link</a></li>
    <li><a>Link</a></li>
</ul>
<span>Первый элемент</span>
<span>Второй элемент</span>`
                },

                css: {
                    lang: 'css',
                    code: `.sel2 + span {
  color: #3598db;
}`
                },

            },

            description: {
                text: 'Это соседний селектор. Он поможет нам выбрать только тот элемент, который следует сразу же за указанным элементом. В этом примере мы выберем только первый span, следующий сразу за тэгом ul.'
            }
        },

        {
            title: {
                textOfTitle: 'Селектор непосредственных вложенностей',
                selectorType: <mark>></mark>
            },

            result: {
                code: <div className={styles.sel3}>
                    <ul>
                        <li>List Item
                            <ul>
                                <li>Child</li>
                            </ul>
                        </li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                    </ul>
                </div>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class='sel3'>
    <ul>
        <li>List Item
            <ul>
                <li>Child</li>
            </ul>
        </li>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
    </ul>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.sel3 > ul {
  background: #3598db;
}`
                },

            },

            description: {
                text: 'Разница между селекторами X Y и X > Y в том, что в последнем примере мы выберем только прямого потомка. Например, у нас есть такой код. Селектор .sel3 > ul выберет только тот элемент ul, который является прямым потомком элемента div с классом равным .sel3. Он не выберет, например, элемент ul , являющийся потомком первого элемента li.'
            }
        },

        {
            title: {
                textOfTitle: 'Селектор',
                selectorType: <mark>~</mark>
            },

            result: {
                code:<><ul className={styles.sel4}>
                    <li><a href="">Link</a></li>
                    <li><a href="">Link</a></li>
                    <li><a href="">Link</a></li>
                </ul>
                    <span>Первый элемент</span> <span>Второй элемент</span>
                </>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<ul class='sel4'>
    <li><a>Link</a></li>
    <li><a>Link</a></li>
    <li><a>Link</a></li>
</ul>
<span>Первый элемент</span>
<span>Второй элемент</span>`
                },

                css: {
                    lang: 'css',
                    code: `.sel4 ~ span {
  color: #3598db;
}`
                },

            },

            description: {
                text: 'Этот селектор похож на X + Y, но он менее строгий. Соседний селектор (.sel2 + span) выберет только первый элемент, следующий сразу же за указанным элементом. Селектор X ~ Y выберет все элементы span, расположенные после элемента ul.'
            }
        },

        {
            title: {
                textOfTitle: 'Селектор регулярного выражения',
                selectorType: <mark>*</mark>
            },

            result: {
                code: <ul className={styles.sel5}>
                    <li><a href="https://www.google.com/">Link</a></li>
                    <li><a href="https://www.yandex.ru/">Link</a></li>
                    <li><a href="https://www.google.com/">Link</a></li>
                </ul>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<ul class='sel5'>
    <li>
        <a 
            href="google.com/">Link</a>
    </li>
    <li>
        <a 
            href="google.ru/">Link</a>
    </li>
    <li>
        <a 
            href="google.com/">Link</a>
    </li>
</ul>`
                },

                css: {
                    lang: 'css',
                    code: `.sel5 a[href*="google"] {
  color: #3598db;
}`
                },

            },

            description: {
                text: 'Звёздочка означает, что указанное значение должно быть частью указанного атрибута. Для составления более строго правила используйте ^ и $, указывающие на начало и конец строки соответственно.'
            }
        },

        {
            title: {
                textOfTitle: 'Селектор регулярного выражения',
                selectorType: <mark>$</mark>
            },

            result: {
                code: <ul className={styles.sel6}>
                    <li><a href="https://www.google.com">Link</a></li>
                    <li><a href="https://www.google.ru">Link</a></li>
                    <li><a href="https://www.google.com">Link</a></li>
                </ul>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<ul class='sel6'>
    <li>
        <a 
            href="google.com">Link</a>
    </li>
    <li>
        <a 
            href="google.ru">Link</a>
    </li>
    <li>
        <a 
            href="google.com">Link</a>
    </li>
</ul>`
                },

                css: {
                    lang: 'css',
                    code: `.sel6 a[href$=".ru"] {
  color: #3598db;
}`
                },

            },

            description: {
                text: 'Мы используем символ из регулярных выражений $, который указывает на конец строки. В этом случае мы ищем все ссылки на сайты, т.е. путь в них должен заканчиваться на .ru'
            }
        },

        {
            title: {
                textOfTitle: 'Псевдокласс',
                selectorType: <mark>:not</mark>
            },

            result: {
                code: <ul className={styles.sel7}>
                    <li><a href="">Link</a></li>
                    <li><a href="">Link</a></li>
                    <li><a href="">Link</a></li>
                </ul>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<ul class='sel7'>
    <li>
        <a>Link</a>
    </li>
    <li>
        <a>Link</a>
    </li>
    <li>
        <a>Link</a>
    </li>
</ul>`
                },

                css: {
                    lang: 'css',
                    code: `.sel7 li:not(li:nth-child(2)) {
  background: rgba(53, 152, 219, 0.5);
}`
                },

            },

            description: {
                text: 'Псевдокласс отрицания бывает очень полезен. Представьте, что вам нужно выбрать все тэги li, кроме одного c nht-child равным 2.\n' +
                    '\n'
            }
        },

        {
            title: {
                textOfTitle: 'Псевдокласс',
                selectorType: <mark>:only-child</mark>
            },

            result: {
                code:<> <ul className={styles.sel8}>
                    <li>List Item</li>
                </ul>
                    <ul className={styles.sel8}>
                        <li>List Item</li>
                        <li>List Item</li>
                    </ul>
                </>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<ul class='sel8'>
    <li>List Item</li>
</ul>
<ul class='sel8'>
    <li>List Item</li>
    <li>List Item</li>
</ul>`
                },

                css: {
                    lang: 'css',
                    code: `.sel8 {
  border: 1px solid #3598db;
  margin-bottom: 6px;
}
.sel8 li:only-child {
  color: #3598db;
}`
                },

            },

            description: {
                text: 'Он позволяет выбрать элемент, являющийся единственным наследником своего родителя. В примере выше элемент списка, являющийся единственным наследником элемента ul, получит голубой цвет шрифта.'
            }
        },

        {
            title: {
                textOfTitle: 'Псевдокласс четных номеров',
                selectorType: <mark>:even</mark>
            },

            result: {
                code: <ul>
                    <li className={styles.sel9}><a href="">Link</a></li>
                    <li className={styles.sel9}><a href="">Link</a></li>
                    <li className={styles.sel9}><a href="">Link</a></li>
                    <li className={styles.sel9}><a href="">Link</a></li>
                    <li className={styles.sel9}><a href="">Link</a></li>
                </ul>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<ul>
    <li class='sel9'>
        <a>Link</a>
    </li>
    <li class='sel9'>
        <a>Link</a>
    </li>
    <li class='sel9'>
        <a>Link</a>
    </li>
    <li class='sel9'>
        <a>Link</a>
    </li>
    <li class='sel9'>
        <a>Link</a>
    </li>
</ul>`
                },

                css: {
                    lang: 'css',
                    code: `.sel9:nth-child(even) {
  background: rgba(53, 152, 219, 0.5);
}

.sel9:not(.sel9:nth-child(even)) {
  background: rgba(53, 152, 219, 0.13);
}`
                },

            },

            description: {
                text: 'Данный псевдокласс позволяет нам выбрать нечетные элементы внутри списка. Кроме того, более темным цветом показан пример, как можно комбинировать псевдоклассы добившись, например противоположного результата - выбора нечетных элементов (аналогичного результат можно доюиться и короче, с помощью псевдокласса :odd).'
            }
        },
    ]
}

export default DataSelectors;
