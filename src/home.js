const HOME = document.querySelector('#content');

function homePage() {
    const el = document.createElement('div')
    el.classList.add('home-page');
    el.textContent = "Welcome to the Main Page"
    HOME.appendChild(el)

    
};


export { HOME }
export { homePage };
