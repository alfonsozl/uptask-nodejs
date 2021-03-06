
const express = require('express');
const router = express.Router();

// Importar express-validator
const { body } = require('express-validator');

// Importando el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = () => {
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    
    router.post('/nuevo-proyecto',
    body('nombre').not().isEmpty().trim().escape(),
    proyectosController.nuevoProyecto);

    return router;
}