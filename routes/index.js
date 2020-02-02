
const express = require('express');
const router = express.Router();

// Importando el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = () => {
    router.get('/', proyectosController.proyectosHome);

    return router;
}