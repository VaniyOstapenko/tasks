const express = require('express');

const app = express();

app.get('/', (request, response) => {
    const arr = [1, 2, 2, 2, 3, 4, 5, 5, 6, 2];
    const new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (!new_arr.includes(arr[i])) {
            new_arr.push(arr[i])
        }
    }
    response.send(new_arr)
})

app.get('/:id', (request, response) => {
    const { id } = request.params;
    const arr = [1, 2, 3, 4, 5, 6];
    const new_arr = [];
    let item = [];
    for (let i = 0; i < arr.length; i++) {
        item.push(arr[i]);
        if (item.length == id) {
            new_arr.push(item);
            item = []
        }
    }
    item.length === 0 ? null : new_arr.push(item);
    response.send(new_arr);
})


app.get('/about', (reques, response) => {
    response.send('Hello world!')
})

app.get('/contact', (reques, response) => {
    response.send('Hello Vaniy!')
})
app.listen(3000, () => {
    console.log('Server is runnig on port:3000');
})