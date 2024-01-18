import sushi from './images/sushi.jpg';

const loadHome = () => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    let sushiImg = document.createElement('img');
    sushiImg.src = sushi;

    let mainText = document.createElement('div');
    mainText.className = 'mainText';
    mainText.innerText = 'Welcome to Neko Sushi, home to freshest sushi! We take pride in our fresh ingredients imported daily from all around the world!'
    
    main.appendChild(mainText)
    main.appendChild(sushiImg);
}

export {loadHome}