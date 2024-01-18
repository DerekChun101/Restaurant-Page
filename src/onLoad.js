import { loadHome } from "./home";
import cat from './images/cat.svg'

const onLoad = () => {
    const content = document.querySelector('#content');
   

    let header = document.createElement('div');
    header.className='header';
    let main = document.createElement('div');
    main.className='main';
    
   
    let heading = document.createElement('div');
    heading.id = 'heading';
    heading.innerText='Neko Sushi';

    let catSvg = document.createElement('img');
    catSvg.src = cat;
    catSvg.className = 'catSvg';

    const tabs = ['Home', 'Menu', 'Contact'];
    let tabList = document.createElement('ul');
    tabList.className = 'tabList';
    for(let i = 0; i<tabs.length; i++) {
        let tab = document.createElement('li');
        tab.className = tabs[i];
        tab.appendChild(document.createTextNode(tabs[i]));

        tabList.appendChild(tab);
    }
   
    header.appendChild(heading);
    header.appendChild(catSvg);
    header.appendChild(tabList);
    
    content.appendChild(header);
    content.appendChild(main);
    loadHome();

    
};



export {onLoad};