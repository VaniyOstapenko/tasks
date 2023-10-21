const express = require('express');
const { allElementArr, oneElementArr, createElementArr, updateElementArr, deleteElementArr } = require('./service')

const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

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

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = createElementArr(label, category, priority);
        res.status(200).send(data);
    } catch (error) {
        res.status(405).send(error.message);
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = updateElementArr(id, label, category, priority)
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteElementArr(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})