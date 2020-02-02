const express = require('express');
const routes = require('./routes');
const path = require('path');

// Creando la app de Express
const app = express();

// Cargando archivos estáticos
app.use(express.static('public'));

// Habilitando el motor de plantillas "pug"
app.set('view engine', 'pug');

// Añadiendo la carpeta de vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(3000);