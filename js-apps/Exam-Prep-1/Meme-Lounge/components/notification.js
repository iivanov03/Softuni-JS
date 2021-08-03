import { html } from '../node_modules/lit-html/lit-html.js'

const notifications = (message) => {
    return html`
    <section id="notifications">
            <div id="errorBox" class="notification">
                <span>${message}</span>
            </div>
        </section>`
}

export { notifications }