import { html } from '../node_modules/lit-html/lit-html.js'
import { isUserLogged } from '../src/helper.js'

function navBtn(isUserLogged){
    return html`
    <a href=${isUserLogged ? '/browse' : '/register'} class="action cta">${isUserLogged
            ? 'Browse Teams'
            : 'Sign Up Now'}
    </a>`
}

function homeTemp(){
    return html`
    <section id="home">
        <article class="hero layout">
            <img src="./assets/team.png" class="left-col pad-med">
            <div class="pad-med tm-hero-col">
                <h2>Wlcome to Team Manager!</h2>
                <p>Want to organize your peers? Create and manage a team for free.</p>
                <p>Looking for a team to join? Browse our communities and find like-minded
                    people!</p>
                ${navBtn(isUserLogged())}
            </div>
        </article>
    </section>`
}

export { homeTemp } 