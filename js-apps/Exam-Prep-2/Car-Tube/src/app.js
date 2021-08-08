import page from '../node_modules/page/page.mjs'
import { renderView } from './helper.js'
import { homeTemp } from '../views/home.js'
import { loginTemp } from '../views/login.js'
import { registerTemp } from '../views/register.js'
import { createTemp } from '../views/create.js'
import { editTemp } from '../views/edit.js'
import { detailsTemp } from '../views/details.js'
import { allListingTemp } from '../views/allListingView.js'
import { myListingTemp } from '../views/myListing.js'
import { byYearTemp } from '../views/byYearView.js'
import { contextAPI } from './api.js'

page('/', () => renderView(homeTemp()))
page('/login', () => renderView(loginTemp()))
page('/register', () => renderView(registerTemp()))
page('/create', () => renderView(createTemp()))

page('/all', contextAPI.loadAllListings,
(context) => renderView(allListingTemp(context.allListings)))
page('/details/:id', contextAPI.storeListing,
(context) => renderView(detailsTemp(context.currentListing)))
page('/edit/:id', contextAPI.storeListing,
(context) => renderView(editTemp(context.currentListing)))
page('/byYear', contextAPI.storeSearchResults,
(context) => renderView(byYearTemp(context.searchResults, context.year)))
page('/myListings', contextAPI.storeUserListings,
(context) => renderView(myListingTemp(context.userListings)))


page.start()