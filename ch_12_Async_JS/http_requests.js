'use strict'

const getTodos = resource => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Failed to fetch the data.');
            }
        });

        request.open('GET', resource);
        request.send();
    });
    
};

// Asynchronous code
getTodos('todos/luigi.json')
    .then(data => {
        console.log('Promise resolved:', data);
    })
    .catch(err => {
        console.log('Promise rejected:', err);
    });


