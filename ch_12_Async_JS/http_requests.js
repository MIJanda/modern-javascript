'use strict'

const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Could not fetch the data.', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

// Asynchronous code
getTodos('todos/luigi.json',(err, data) => {
    console.log(data);
    getTodos('todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('todos/ryu.json', (err, data) => {
            console.log(data);
        });
    });
});


