import page from '../node_modules/page/page.mjs'
import { registerTemp } from '../views/register.js'
import { loginTemp } from '../views/login.js'
import { contextAPI } from './api.js'
import { allMemeTemp } from '../views/allMeme.js'
import { createTemp } from '../views/createMeme.js'
import { detailTemp } from '../views/detailsMeme.js'
import { memes } from '../requests/req.js'
import { editTemp } from '../views/editMeme.js'
import { userProfileTemp } from '../views/userProfile.js'
import { renderView } from './helper.js'

page('/', contextAPI.pickHomePage, (context) => renderView(context.homePage()))
page('/register', () => renderView(registerTemp()))
page('/login', () => renderView(loginTemp()))
page('/memes', contextAPI.storeAllMemes, (context) => renderView(allMemeTemp(context.allMemes)))
page('/create', () => renderView(createTemp()))
page('/details/:id', contextAPI.storeMeme, (context) => renderView(detailTemp(context.meme)))
page('/edit/:id', contextAPI.storeMeme, (context) => renderView(editTemp(context.meme)))
page('/profile', contextAPI.storeUserData, (context) => renderView(userProfileTemp(context.user)))
page.start()

document.addEventListener('click', async (e) => {
	if (e.target.tagName === 'BUTTON' && e.target.classList.contains('danger')) {
		try {
			await memes.deleteMeme(e.target.dataset.id)

			page.redirect('/memes')
		} catch (e) {
			return alert(e.message)
		}
	}
})