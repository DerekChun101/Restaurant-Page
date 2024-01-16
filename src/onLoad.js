const onLoad = () => {
    const content = document.querySelector('#content');
    
    let header = document.createElement('div');
    header.className='header';

    let heading = document.createElement('div');
    heading.id = 'heading';
    heading.innerText='Neko Sushi';

    header.appendChild(heading);
    content.appendChild(header);
};

export {onLoad};