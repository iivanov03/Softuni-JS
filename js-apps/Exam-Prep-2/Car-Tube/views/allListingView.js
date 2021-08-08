import { html } from '../node_modules/lit-html/lit-html.js'
import { listing } from '../components/listing.js'


const allListingTemp = (listings) => {
	return html`
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${listings.length > 0
                        ? listings.map(listing)
                        : html`<p class="no-cars">No cars in database.</p>`}
            </div>
        </section>`
}

export { allListingTemp }