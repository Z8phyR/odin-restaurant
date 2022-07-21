import { navBar } from "./navbar";

const HOME = document.querySelector('#content');

function homePage() {
    const homeContent = document.createElement('div')
    homeContent.classList.add('home-page')
    const h1 = document.createElement('h1')
    h1.classList.add('title-text');
    h1.textContent = "Aloha And Eat!"
        const introDiv = document.createElement('div');
        const introP = document.createElement('p');
        introP.classList.add('intro-text');
        introP.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam explicabo voluptatem totam esse corporis nisi iste ut qui cumque! Aliquam molestias iure omnis, quisquam nesciunt repellendus. Repellendus similique assumenda maiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus a, odit deserunt doloribus veniam placeat quisquam vel sequi repellendus repudiandae rem sint sit illum dolorem nemo quo nostrum commodi accusantium!"
    
    //change from div to img and add source after connecting via webpack
        const introImg = document.createElement('div')
        introImg.classList.add('intro-img');
        introDiv.append(introImg, introP);
    
    homeContent.append(h1, introDiv);
    HOME.appendChild(homeContent)
};


function resetPage() {
  
  HOME.textContent = "";
    console.log("PAGE RESET");
}

export { HOME }
export { homePage };
export { resetPage };

