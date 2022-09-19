const express = require ('express');

const alterandoUsuarioController = require('../controllers/usuario/alterandoUsuarioController');

const criandousuarioController = require('../controllers/usuario/criandoUsuarioController');

const deletandoUsuarioController = require('../controllers/usuario/deletandoUsuarioController');
const loginUsuarioController = require('../controllers/usuario/loginUsuario');

const pegandoUsuarioController = require('../controllers/usuario/pegandoUsuarioController');

const usuarioRotas = express.Router();


usuarioRotas.post("/usuario", criandousuarioController);

usuarioRotas.post("/login", loginUsuarioController)

usuarioRotas.get('/usuario', pegandoUsuarioController);

usuarioRotas.put('/usuario/:id', alterandoUsuarioController);

usuarioRotas.delete('/usuario/:idUsuario', deletandoUsuarioController);

module.exports = usuarioRotas;
