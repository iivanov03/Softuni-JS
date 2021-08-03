import { html, render, nothing } from '../node_modules/lit-html/lit-html.js'
import { createFormObject, showNotification } from '../src/helper.js'
import { user } from '../requests/req.js'
import { saveUserInStorage } from '../src/helper.js'
import { layout } from '../components/layout.js'
import page from '../node_modules/page/page.mjs'
import { notifications } from '../components/notification.js'

const errors = {
	403: 'Invalid username and/or password',
	'Empty': 'All fields are required!'
}

const login = async (e) => {
	e.preventDefault()
	const formObject = createFormObject(e.target)

	try {
		if (formObject.email === '' || formObject.password === '') {
			throw new Error('Empty')
		}

		const response = await user.login({
			email: formObject.email,
			password: formObject.password
		})

		saveUserInStorage(response)
		page.redirect('/')
	} catch (error) {
		showNotification(loginTemp, errors[error.message])
	}
}

const loginTemp = (errorMsg) => {

	return html`
        <section id="login">
            <form id="login-form" @submit="${login}">
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password"
                           name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="#">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>
        ${errorMsg ? notifications(errorMsg) : nothing}`
}

export { loginTemp }