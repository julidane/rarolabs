const express = require('express');
const { createPagination, readPagination } = require('./Controller');

const app = express();
app.use(express.json());

app.post('/pagination', createPagination);
app.get('/pagination', readPagination);

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
});