
const loadMenu = () => {

    const main = document.querySelector('.main');
    main.innerHTML = '';
    let menuWrapper = document.createElement('div');
    menuWrapper.className= 'menuWrapper';

    main.appendChild(menuWrapper);

    let menuHeader = document.createElement('div');
    menuHeader.className = 'menuHeader';
    menuHeader.innerText =  'Menu';

    menuWrapper.appendChild(menuHeader);

    let subHeading = document.createElement('div');
    subHeading.className = 'subHeading';
    subHeading.innerText = 'Sushi A La Carte';

    menuWrapper.appendChild(subHeading);

    const items = ['Salmon', 'Otoro', 'Uni', 'Tuna', 'Lobster']
    let itemList = document.createElement('ul')
    itemList.className = 'itemList';
    for(let i = 0; i < items.length; i++) {
        let item = document.createElement('li');
        item.classList = 'item';
        item.appendChild(document.createTextNode(items[i]));

        itemList.appendChild(item);
    }
    menuWrapper.appendChild(itemList);
    
}

export {
    loadMenu
}