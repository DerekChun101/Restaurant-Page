import huhCat from './images/huh_cat.jpg';

const loadContact = () => {
    
    const main = document.querySelector('.main');
    main.innerHTML = '';

    let contactWrapper = document.createElement('div');
    contactWrapper.className = 'contactWrapper';

    main.appendChild(contactWrapper);

    let contactHeader = document.createElement('div');
    contactHeader.className = 'contactHeader';
    contactHeader.innerText =  'Contact Us!';

    contactWrapper.appendChild(contactHeader);

    let subHeading = document.createElement('div');
    subHeading.className = 'subHeading';
    subHeading.innerText = 'Number: xxx-xxx-xxxx';

    contactWrapper.appendChild(subHeading);

    let subHeading2 = document.createElement('div');
    subHeading2.className = 'subHeading';
    subHeading2.innerText = 'Location: 123 Street';

    contactWrapper.appendChild(subHeading2);

    let subHeading3 = document.createElement('div');
    subHeading3.className = 'subHeading';
    subHeading3.innerText = 'Manager: ';
    contactWrapper.appendChild(subHeading3);

    let huhCatImg = document.createElement('img');
    huhCatImg.src = huhCat;
    huhCatImg.className = 'huhCat';
    
    contactWrapper.appendChild(huhCatImg);
}

export {loadContact}