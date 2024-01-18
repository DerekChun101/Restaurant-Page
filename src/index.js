import { onLoad } from "./onLoad";
import './style.css';
import { loadMenu } from "./Menu";
import { loadContact } from "./Contact";
import { loadHome } from "./home";

onLoad();

const homeTab = document.querySelector('.Home');
homeTab.addEventListener('click', () => {
    loadHome();
}); 
const menuTab = document.querySelector('.Menu');
menuTab.addEventListener('click', () => {
    loadMenu();
});

const contactTab = document.querySelector('.Contact');
contactTab.addEventListener('click', () => {
    loadContact();
})




