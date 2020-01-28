
const express = require('express');

// Creando la app de Express
const app = express();

const productos = [
    {
        nombre : "Tesla CyberTruck",
        precio : 39999
    },
    {
        nombre : "Xiaomi Mi 9",
        precio : 300
    }
];

// Ruta para home
app.use('/', (req, res) => {
    res.json(productos);
});

app.listen(3000);