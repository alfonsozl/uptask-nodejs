
const express = require('express');

// Creando la app de Express
const app = express();
const puerto = 3000;

// Ruta para home
app.use('/', (req, res) => {
    res.send('Hello World!!!');
} );

app.listen(puerto, (req, res) => {
    console.log(`Server listening on port: ${puerto}`)
});