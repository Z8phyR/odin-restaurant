import { HOME } from './home.js'
import { homePage} from './home.js';

function navBar() {
    const el = document.createElement('div');
    el.classList.add('nav-bar');
    const homelink = document.createElement('button')
        homelink.innerText = 'Home';
        homelink.classList.add('home-nav');
    const menulink = document.createElement('button')
        menulink.innerText = 'Menu';
        menulink.classList.add('menu-nav');
    const contactlink = document.createElement('button')
        contactlink.innerText = 'Contact';
        contactlink.classList.add('contact-nav');
    el.appendChild(homelink);
    el.appendChild(menulink);
    el.appendChild(contactlink);
    el.addEventListener("click",event => {
        let etarget = event.target;
        let elist = etarget.classList;
            console.log("Event Triggered " + etarget.classList );
        if (elist == 'home-nav') {
            homePage();
        }
        if (elist == 'menu-nav') {
            console.log("GO TO THE MENU");
        }
        if (elist == 'contact-nav') {
            console.log("CONTACT US PAGE");
        }
    })
    HOME.appendChild(el);
}

export { navBar };

