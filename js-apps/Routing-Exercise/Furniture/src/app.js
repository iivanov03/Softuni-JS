import page from 'https://unpkg.com/page/page.mjs'
import { render } from 'https://unpkg.com/lit-html?module'
import { PageLayout } from '../components/layout.js'
import { Create } from '../views/create.js'
import { Dashboard } from '../views/dashboard.js'
import { Catalog } from '../views/catalog.js'
import { Details } from '../views/details.js'
import { Edit } from '../views/edit.js'
import { Login } from '../views/login.js'
import { Register } from '../views/register.js'
import { context } from './context.js'

const renderView = (view) => render(PageLayout(view), document.querySelector('body'))

page.redirect('/', '/dashboard')
page(
	'/dashboard',
	context.storeAllFurniture,
	(context) => renderView(Dashboard(context.allFurniture))
)
page('/catalog', () => renderView(Catalog()))
page('/create', () => renderView(Create()))
page(
	'/details/:id',
	context.storeFurnitureItem,
	(context) => renderView(Details(context.currentItem))
)
page('/edit/:id', context.storeFurnitureItem, (context) => renderView(Edit(context.currentItem)))
page('/Edit', () => renderView(Edit()))
page('/Login', () => renderView(Login()))
page('/my-furniture', context.storeMyFurniture,
	(context) => renderView(Dashboard(context.myFurniture))
)
page('/register', () => renderView(Register()))
page()