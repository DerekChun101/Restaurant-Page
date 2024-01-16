const onLoad = () => {
    const content = document.querySelector('#content');
    let header = document.createElement('div');

    header.className='header';

    content.appendChild(header);
};

export {onLoad};