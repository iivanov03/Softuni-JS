import { html } from '../node_modules/lit-html/lit-html.js'
import { navigation } from './header.js'
import { footer } from './footer.js'

const layout = (...children) => html`
    ${navigation()}
    <main>
        ${children}
    </main>
    ${footer()}`

export { layout }