


const loadMenu = () => {

    const main = document.querySelector('.main');
    main.innerHTML = '';

    let menuHeader = document.createElement('div');
    menuHeader.className = 'menuHeader';
    menuHeader.innerText =  'Menu';

    main.appendChild(menuHeader);
    
}

export {
    loadMenu
}