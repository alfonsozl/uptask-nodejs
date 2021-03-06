const Proyectos = require('../models/Proyectos');
const slug = require('slug');

exports.proyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina : 'Proyectos',
        proyectos
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina : 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = async (req, res) => {
    // Enviar a consola lo que el usuario escriba
    // console.log(req.body);

    // Validar que exista algo en el input
    const { nombre } = req.body;

    let errores = [];

    if( !nombre ) {
        errores.push({ 'texto' : 'Agrega un nombre al proyecto' })
    }

    // Si hay errores:
    if( errores.length > 0 ) {
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores
        });
    } else {
        // Si no hay errores, insertar en la BD
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}