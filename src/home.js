import {HOME} from './domselector.js'

function homePage() {
    const el = document.createElement('div')
    el.classList.add('home-page');
    el.textContent = "Welcome to the Main Page"
    HOME.appendChild(el)
};

export { homePage };
