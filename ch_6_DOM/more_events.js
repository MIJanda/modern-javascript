const copyCat = document.querySelector('.copy-me');

// copy event
copyCat.addEventListener('copy', () => {
    console.log('Cheiii! You copy cat, look am ooo... my content is copyright! :)');
});

const box = document.querySelector('.box');

// mouse move event 
box.addEventListener('mousemove', e => {
    box.textContent = `x pos: ${e.offsetX}, y pos: ${e.offsetY}`;
});

// wheel event 
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});