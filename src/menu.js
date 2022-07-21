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
        menuItem.classList.add(`menu-item`)
        menuItem.classList.add(`item-${i}`);
        div.appendChild(menuItem);
    }
        const item0 = div.querySelector('.item-0')
        const item1 = div.querySelector('.item-1')
        const item2 = div.querySelector('.item-2')
        const item3 = div.querySelector('.item-3')
        const item4 = div.querySelector('.item-4')
        const item5 = div.querySelector('.item-5')

        item0.innerText = "Aloha Steaks & Rice"
        item1.innerText = "Pineapple Cupcakes"
        item2.innerText = "Surfer Ham & Cheese"
        item3.innerText = "Hawaii Party Sticks"
        item4.innerText = "Coconut Crab Cakes"
        item5.innerText = "Volcano Shakes"
    HOME.appendChild(div);
    console.log("MENU")
}

export {menu};
