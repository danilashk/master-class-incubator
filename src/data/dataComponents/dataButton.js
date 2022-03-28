import React from 'react';

const DataButton = {
    data: [
        {
            title: 'Посмотреть исходный код',

            templatesCode: {

                html: {
                    lang: 'jsx',
                    code: `<div className={styles.btnBox}>
    <button className={styles.btn}>Button Text</button>
</div>`
                },

                css: {
                    lang: 'css',
                    code: '.btnBox {\n' +
                        '  max-width: fit-content;\n' +
                        '  overflow: hidden;\n' +
                        '  .btn {\n' +
                        '    min-width: 48px;\n' +
                        '    padding: 9px 6px;\n' +
                        '    min-height: 38px;\n' +
                        '    word-break: break-all;\n' +
                        '    cursor: pointer;\n' +
                        '    background-color: transparent;\n' +
                        '    font-weight: 300;\n' +
                        '    font-size: 16px;\n' +
                        '    border: 1px solid rgba(255, 255, 255, .5);\n' +
                        '    transition: 0.3s ease-in-out;\n' +
                        '    color: rgba(255, 255, 255, .8);\n' +
                        '\n' +
                        '    &:hover {\n' +
                        '      border: 1px solid rgba(255, 255, 255, .8);\n' +
                        '      color: white;\n' +
                        '    }\n' +
                        '\n' +
                        '    &:focus {\n' +
                        '      background-color: rgba(255, 255, 255, .4);\n' +
                        '      color: white;\n' +
                        '    }\n' +
                        '\n' +
                        '    &:active {\n' +
                        '      border: 1px solid rgba(255, 255, 255, .6);\n' +
                        '      background-color: rgba(255, 255, 255, .6);\n' +
                        '      color: white;\n' +
                        '    }\n' +
                        '  }\n' +
                        '}'
                }

            }
        }
    ]
}

export default DataButton
