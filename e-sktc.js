const container=document.querySelector('.container')
for(let i=0;i<256;i++){
    const c=document.createElement('div');
    c.classList.add('grid');
    container.appendChild(c);
}