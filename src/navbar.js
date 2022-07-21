import { HOME, resetPage } from './home.js'
import { homePage} from './home.js';
import { menu } from './menu.js';

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
    el.addEventListener("click", event => {
       if (event.target.matches('button')) {
        let etarget = event.target;
            let elist = etarget.classList;
            console.log("Event Triggered " + elist );
         if (elist == 'home-nav') { 
            resetPage();
            navBar();
            homePage();
           }
          if (elist == 'menu-nav') { 
            resetPage()
            navBar();
            menu();
          }
          if (elist == 'contact-nav') {
            console.log("CONTACT US PAGE");
           }
    }
    })
    HOME.appendChild(el);
}
const navClass = document.querySelector('#nav-bar');

export { navClass };
export { navBar };

