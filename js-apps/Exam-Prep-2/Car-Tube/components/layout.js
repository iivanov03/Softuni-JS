import { html } from '../node_modules/lit-html/lit-html.js'
import { nav } from './header.js'
import { footer } from './footer.js'

const layout = (...children) =>  html`
${nav()}
<main>
    ${children}
</main>
${footer()}`

export { layout }