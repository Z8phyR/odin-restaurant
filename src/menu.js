import {HOME} from './home.js';
import { navBar } from './navbar.js';

function menu() {
    // navBar();
    const div = document.createElement('div');
    div.classList.add('menu-page')
    const h1 = document.createElement('h1');
    h1.classList.add('menu-title');
    h1.innerText = "The Aloha Menu";
    div.appendChild(h1)

    for (let i = 0;i<6;i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        div.appendChild(menuItem);
    }
    HOME.appendChild(div);
    console.log("MENU")
}

export {menu};
