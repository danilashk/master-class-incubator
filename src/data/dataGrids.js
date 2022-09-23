import React from 'react';

const DataGrids = {
    data: [
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
   display: flex;
   flex-wrap: wrap;
   border: 1px solid #3598db;
}
.wrapper > div {
   flex: 1 1 200px;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   border: 1px solid #3598db;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
   <div class="box1">One</div>
   <div class="box2">Two</div>
   <div class="box3">Three</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
   display: flex;
   align-items: flex-end;
   min-height: 200px;
   border: 1px solid #3598db;
}
.box1 {
   align-self: stretch;
}
.box2 {
   align-self: flex-start;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
   <div class="box1">One</div>
   <div class="box2">Two</div>
   <div class="box3">Three</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
   display: grid;
   grid-template-columns: repeat(3,1fr);
   align-items: end;
   grid-auto-rows: 200px;
   border: 1px solid #3598db;
}.box1 {
   align-self: stretch;
}
.box2 {
   align-self: start;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
   display: flex;
   flex-wrap: wrap;
   border: 1px solid #3598db;
}
.wrapper > div {
   flex: 1 1 200px;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
  display: grid;
  border: 1px solid #3598db;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 300px); // Повторяет 300px 4 раза
  border: 1px solid #3598db;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  border: 1px solid #3598db;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  border: 1px solid #3598db;
}`
                },
            }
        },
        {
            templatesCode: {
                html: {
                    lang: 'jsx',
                    code: `<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>`
                },

                css: {
                    lang: 'css',
                    code: `.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  border: 1px solid #3598db;
}`
                },
            }
        },
    ]
}

export default DataGrids
