const button = document.querySelector('button');
const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         e.target.remove();
//         // stop event bubbling
//         e.target.stopPropagation();
        
//     });
// });

button.addEventListener('click', e => {
    const li = document.createElement('li');
    li.textContent = 'New todo';
    ul.prepend(li);
});


// Event delegation
ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI'){
        e.target.remove();
    }
    
});

