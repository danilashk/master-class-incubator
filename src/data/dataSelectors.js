import React from 'react';
import styles from './dataSelectors.module.scss'

const DataSelectors = {
    data: [
        {
            title: {
                textOfTitle: 'Title',
            },

            result: {
                code: <ul><li>Its Li</li></ul>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div>123</div>`
                },

                css: {
                    lang: 'css',
                    code: `div {color: red}`
                },

            },

            description: {
                text: 'its description'
            }
        },

        {
            title: {
                textOfTitle: 'Title',
            },
            result: {
                code: <ul className={styles.ul}><li>Its Li</li></ul>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div>123</div>`
                },

                css: {
                    lang: 'css',
                    code: `div {color: red}`
                },

            },

            description: {
                text: 'its description'
            }
        },

        {
            title: {
                textOfTitle: 'Title',
            },
            result: {
                code: <ul className={styles.ul}><li>Its Li</li></ul>
            },
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div>123</div>`
                },

                css: {
                    lang: 'css',
                    code: `div {color: red}`
                },

            },

            description: {
                text: 'its description'
            }
        }
    ]
}

export default DataSelectors;
