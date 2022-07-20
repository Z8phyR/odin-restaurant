const HOME = document.querySelector('#content');

function homePage() {
    const el = document.createElement('div')
    el.classList.add('home-page')
    
    const h1 = document.createElement('h1')
    h1.classList.add('title-text');
    h1.textContent = "Aloha And Eat!"
    

    const introDiv = document.createElement('div');
        const introP = document.createElement('p');
        introP.classList.add('intro-text');
        introP.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam explicabo voluptatem totam esse corporis nisi iste ut qui cumque! Aliquam molestias iure omnis, quisquam nesciunt repellendus. Repellendus similique assumenda maiores!"
    
    //change from div to img and add source after connecting via webpack
        const introImg = document.createElement('div')
        introImg.classList.add('intro-img');
        introDiv.append(introImg, introP);
    
    el.append(h1, introDiv);
    HOME.appendChild(el)
};


export { HOME }
export { homePage };
