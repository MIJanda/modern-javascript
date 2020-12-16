'use strict'

const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
        todos.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
};



addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();

    
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset()
    }
});

todos.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    const todoItems = Array.from(todos.children);

    todoItems
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('d-none'));

    todoItems
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('d-none'));
};

search.addEventListener('keyup', e => {
    const searchTerm = e.target.value.toLowerCase();
    
    filterTodos(searchTerm);
});

