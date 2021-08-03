import { render } from '../node_modules/lit-html/lit-html.js'
import { pageLayout } from '../components/layout.js'
import page from '../node_modules/page/page.mjs'
import { homeTemp } from '../views/home.js'
import { browseTemp } from '../views/browse.js'
import { contextAPI } from './api.js'
import { isUserLogged } from './helper.js'
import { registerTemp } from '../views/register.js'
import { loginTemp } from '../views/login.js'
import { createTemp } from '../views/create.js'
import { editTemp } from '../views/edit.js'
import { detailsTemp } from '../views/details.js'
import { myTeamsTemp } from '../views/myTeams.js'
import { renderView } from './helper.js'

const renderView = (view) => render(pageLayout(view), document.getElementById('content'))

page('/', () => renderView(homeTemp()))
page('/register', () => renderView(registerTemp()))
page('/login', () => renderView(loginTemp()))
page('/create', () => renderView(createTemp()))
page('/edit/:id', contextAPI.storeSingleTeam, (context) => renderView(editTemp(context)))
page('/details/:id', contextAPI.storeDetails, (context) => renderView(detailsTemp(context)))
page(
	'/browse',
	contextAPI.storeAllTeamsInfo,
	(context) => renderView(browseTemp(isUserLogged(), context.teams))
)
page('/myTeams', contextAPI.storeMyTeams, (context) => renderView(myTeamsTemp(context)))

page()