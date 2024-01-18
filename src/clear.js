const clear = () => {
    document.body.innerHTML = '';
    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);
}

export {clear}