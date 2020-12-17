const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 400) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log('Could not fetch the data.');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();