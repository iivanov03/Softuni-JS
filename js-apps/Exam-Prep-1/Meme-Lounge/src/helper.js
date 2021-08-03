import { render } from '../node_modules/lit-html/lit-html.js'
import { layout } from '../components/layout.js';

const container = document.getElementById('container')
const renderView = (view) => render(layout(view), container)

const isUserLogged = () => sessionStorage.getItem('accessToken') ? true : false

const createFormObject = (form) => {
    const formData = new FormData(form);

    return Object.fromEntries([...formData.entries()])
}


const saveUserInStorage = data => {
    sessionStorage.setItem('email', data.email)
    sessionStorage.setItem('username', data.username)
    sessionStorage.setItem('id', data._id)
    sessionStorage.setItem('accessToken', data.accessToken)
    sessionStorage.setItem('gender', data.gender)

    return data
}

const showNotification = (view, message) => {
    renderView(view(message))

    setTimeout(() => renderView(view(message)), 3000)
}



export { isUserLogged, createFormObject, saveUserInStorage, renderView, showNotification }