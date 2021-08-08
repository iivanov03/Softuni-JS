import { html } from '../node_modules/lit-html/lit-html.js'
import { listing } from '../components/listing.js'

const myListingTemp = (listings) => {

	return html`
        <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">
                ${listings.length > 0
                        ? listings.map(listing)
                        : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}
            </div>
        </section>`
}

export { myListingTemp }