import sushi from './images/sushi.jpg';
import huhCat from './images/huh_cat.jpg';


const loadHome = () => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    let sushiImg = document.createElement('img');
    sushiImg.src = sushi;
    sushiImg.className = 'sushiImg'

    

    let mainText = document.createElement('div');
    mainText.className = 'mainText';
    mainText.innerHTML = '<span>Welcome to Neko Sushi</span>, home to freshest sushi!\n We take pride in our fresh ingredients imported daily from all around the world!'
    
    main.appendChild(mainText)
    main.appendChild(sushiImg);
}

export {loadHome}