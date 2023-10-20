const express = require('express');
const { allElementArr, oneElementArr } = require('./service')

const app = express();

app.get('/', (req, res) => {
    const data = allElementArr();
    res.send(data);
})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = oneElementArr(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})