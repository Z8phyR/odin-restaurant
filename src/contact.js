import { HOME } from "./home";

function contactUs() {
    const div = document.createElement('div');
    div.classList.add('contact-page')
    const h1 = document.createElement('h1');
    h1.classList.add('contact-title');
    h1.textContent = "Call Us"
    div.appendChild(h1);
    const p = document.createElement('p');
    p.classList.add('phone-number');
    p.textContent = '📱 000 - 123 - 4567'
    div.appendChild(p);
    



    HOME.appendChild(div)
}

export { contactUs };
