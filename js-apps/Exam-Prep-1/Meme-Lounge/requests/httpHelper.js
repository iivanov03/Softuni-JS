const origin = 'http://localhost:3030'

const createOptions = (method = 'GET', body) => {
	const options = {
		method,
		headers: {},
	}
	const token = sessionStorage.getItem('accessToken')

	if (token) {
		options.headers['X-Authorization'] = token
	}
	if (body) {
		options.headers['Content-Type'] = 'application/json'
		options.body = JSON.stringify(body)
	}

	return options
}

const request = async (url, options) => {
	const URL = url[0] === '/' ? url : `/${url}`
	let response = {}

	try {
		response = await fetch(`${origin}${URL}`, options)
	} catch (e) {
		throw new Error(e)
	}

	if (! response.ok) {
		throw new Error(response.status)
	}

	try {
		return await response.json()
	} catch (e) {
		return response
	}
}

const fetches = {
	get: async (url) => await request(url, createOptions()),
	post: async (url, body) => await request(url, createOptions('POST', body)),
	put: async (url, body) => await request(url, createOptions('PUT', body)),
	delete: async (url) => await request(url, createOptions('DELETE')),
}

export { fetches }