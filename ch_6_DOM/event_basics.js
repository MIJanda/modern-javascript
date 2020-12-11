// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('You clicked me!');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        // universally accepted
        // console.log(e.target);
        // iterable
        // console.log(item);
        e.target.style.textDecoration = 'line-through';
    });
});