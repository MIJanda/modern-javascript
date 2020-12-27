// store data in local storage
localStorage.setItem('name', 'luigi');
localStorage.setItem('age', 50);

// get data from local storage 
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// updating data
localStorage.setItem('name', 'mario');
localStorage.age = 45;

name = localStorage.getItem('name');
age = localStorage.getItem('age');

// deleting data from local storage
// delete specific item
localStorage.removeItem('name');
// delete all items
localStorage.clear();

// storing non-string type data 
const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));