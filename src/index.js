import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

function clearContent() {
    const content = document.getElementById('content');
    content.textContent = '';
}

document.getElementById('home-button').addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.getElementById('menu-button').addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.getElementById('contact-button').addEventListener('click', () => {
    clearContent();
    loadContact();
});

loadHome(); //default page