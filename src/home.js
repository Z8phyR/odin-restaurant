const HOME = document.querySelector('#content');

function homePage() {
    const el = document.createElement('div')
    el.classList.add('home-page');
    el.textContent = "Welcome to the Main Page"
    HOME.appendChild(el)
};

function navBar() {
    const el = document.createElement('div');
    el.classList.add('nav-bar');
    const homelink = document.createElement('button')
        homelink.innerText = 'Home';
    const menulink = document.createElement('button')
    menulink.innerText = 'Menu';

    const contactlink = document.createElement('button')
    contactlink.innerText = 'Contact';
    
    homelink.classList.add('home-nav');
    menulink.classList.add('menu-nav');
    contactlink.classList.add('contact-nav');

    el.appendChild(homelink);
    el.appendChild(menulink);
    el.appendChild(contactlink);
    HOME.appendChild(el);


}

export { navBar };



export { homePage };
