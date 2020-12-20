// async & await
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');

    if (response.status !== 200) {
        throw new Error('Cannot fetch the resource');
    }

    const data = await response.json();

    return data;
};

getTodos()
    .then(todos =>  console.log(todos))
    .catch(err => console.log(err.message));