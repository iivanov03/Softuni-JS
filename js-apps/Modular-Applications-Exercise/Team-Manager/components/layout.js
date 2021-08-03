import { html } from '../node_modules/lit-html/lit-html.js'
import { header } from './header.js'


const pageLayout = (...children) => html`
    ${header()}
    <main>
        ${children}
    </main>`

export { pageLayout }