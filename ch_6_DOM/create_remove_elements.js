const ul = document.querySelector('ul');
// remove element from the DOM
// ul.remove();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // add to beginning of the list
    ul.prepend(li);
    // add to end of the list
    // ul.append(li);
});


const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        // removes the clicked item
        e.target.remove();
    });
});