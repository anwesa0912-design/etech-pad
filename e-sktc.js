const container=document.querySelector('.container')
for(let i=0;i<256;i++){
    const c=document.createElement('div');
    c.classList.add('grid');
    container.appendChild(c);
    c.style.width='calc(100%/16)'
    c.style.height='calc(100%/16)'
    c.addEventListener('mouseover',()=>{c.style.backgroundColor =getcolor();});
}
const b=document.createElement('button');
b.textContent='CLEAR';
container.before(b);
b.addEventListener('click',()=>{const sq=document.querySelectorAll('.grid');
   sq.forEach(sq=>{ sq.style.backgroundColor='white'});
});
const r=document.createElement('button');
container.before(r);
r.textContent='RE-SIZE';
r.addEventListener('click',()=>{let s=prompt('Enter the size of grid: ');
    container.innerHTML=''; for(let j=0;j<s*s;j++){
        const c=document.createElement('div');
    c.classList.add('grid');
    container.appendChild(c);
    c.addEventListener('mouseover',()=>{c.style.backgroundColor =getcolor();});
    c.style.width=`calc(100%/${s})`;
    c.style.height=`calc(100%/${s})`;
    };
});
function getcolor(){
    const r =Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}