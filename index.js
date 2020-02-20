const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Helpers
const helpers = require('./helpers');

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

// Pasar var dump a la app
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
});

// Implementando Middleware
app.use((req, res, next) => {
    console.log('Yo soy middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Yo soy otro middleware');
    next();
});

// Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/', routes());

app.listen(3000);