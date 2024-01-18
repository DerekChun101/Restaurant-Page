import { onLoad } from "./onLoad";
import './style.css';
import { loadMenu } from "./Menu";
import { loadContact } from "./Contact";

onLoad();

const menuTab = document.querySelector('.Menu');
menuTab.addEventListener('click', () => {
    loadMenu();
});

const contactTab = document.querySelector('.Contact');
contactTab.addEventListener('click', () => {
    loadContact();
})




