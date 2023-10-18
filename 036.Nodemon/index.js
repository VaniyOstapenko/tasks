const express = require('express');
const { getAllData, getDataById, createData, updateData, deleteData } = require('./service');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    const data = getAllData();
    response.send(data);
})

app.post('/', (req, res) => {
    const { name, age } = req.body;
    const data = createData(name, age);
    res.send(data);
})

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const data = updateData(id, name, age);
    res.send(data);

})

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = getDataById(id);
    res.send(result);
})

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const data = deleteData(id);
    res.send(data)
})

app.listen(3000, () => {
    console.log('server is running');
})