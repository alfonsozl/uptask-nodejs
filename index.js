const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Crear la conexión a la BD
const db = require('./config/db');

// Importando el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch(error => console.log(error))

// Creando la app de Express
const app = express();

// Cargando archivos estáticos
app.use(express.static('public'));

// Habilitando el motor de plantillas "pug"
app.set('view engine', 'pug');

// Añadiendo la carpeta de vistas
app.set('views', path.join(__dirname, './views'));

// Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/', routes());

app.listen(3000);