import { html, render, nothing } from '../node_modules/lit-html/lit-html.js'
import { createFormObject, showNotification } from '../src/helper.js'
import { memes } from '../requests/req.js'
import page from '../node_modules/page/page.mjs'
import { notifications } from '../components/notification.js'

const updateMeme = async (id, e) => {
	e.preventDefault()
	const formData = createFormObject(e.target)

	if (Object.values(formData).every(x => x !== '')) {
		await memes.updateMeme(id, formData)

		page.redirect('/memes')
	} else {
		showNotification((msg) => editTemp(formData, msg), 'All fields are required')
	}
}

const editTemp = ({ title, description, imageUrl, _id, }, errorMsg) => {
	return html`
        <section id="edit-meme">
            <form id="edit-form" @submit="${(e) => updateMeme(_id, e)}">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title"
                           .value="${title}">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description"
                              name="description">${description}</textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl"
                           name="imageUrl" .value="${imageUrl}">
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
        ${errorMsg ? notifications(errorMsg) : nothing}`
}

export { editTemp }