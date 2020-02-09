const Sequelize = require('sequelize');

const db = require('../config/db');

const Proyectos = db.define('proyectos', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nombre : Sequelize.STRING,
    url : Sequelize.STRING
}, {
    hooks : {
        beforeCreate() {
            console.log('Antes de insertar en la BD.');
        }
    }
});

module.exports = Proyectos;