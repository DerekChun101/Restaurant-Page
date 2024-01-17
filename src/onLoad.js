import sushi from './images/sushi.jpg';

const onLoad = () => {
    const content = document.querySelector('#content');
    let sushiImg = document.createElement('img');
    sushiImg.src = sushi;

    let header = document.createElement('div');
    header.className='header';
    let main = document.createElement('div');
    main.className='main';
    
    let mainText = document.createElement('div');
    mainText.className = 'mainText';
    mainText.innerText = 'Welcome to Neko Sushi, home to freshest sushi! We take pride in our fresh ingredients imported daily from all around the world!'
    
    let heading = document.createElement('div');
    heading.id = 'heading';
    heading.innerText='Neko Sushi';
    
    const tabs = ['Home', 'Menu', 'Contact'];
    let tabList = document.createElement('ul');
    tabList.className = 'tabList';
    for(let i = 0; i<tabs.length; i++) {
        let tab = document.createElement('li');
        tab.appendChild(document.createTextNode(tabs[i]));

        tabList.appendChild(tab);
    }
    
   

    main.appendChild(mainText)
    main.appendChild(sushiImg);

    header.appendChild(heading);
    header.appendChild(tabList);
    content.appendChild(header);
    content.appendChild(main);

    
};



export {onLoad};