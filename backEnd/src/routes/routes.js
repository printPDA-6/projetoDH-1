const express = require ('express');

const alterandoUsuarioController = require('../controllers/usuario/alterandoUsuarioController');
const alterandoProdutoController = require('../controllers/produtos/alterandoProdutoController');
const alterandoFormadeenvioController = require('../controllers/formaDeenvio/alterandoFormadeenvio');

const criandousuarioController = require('../controllers/usuario/criandoUsuarioController');
const criandoProdutoController = require('../controllers/produtos/criandoProdutoController');
const criandoFormadeenvioController = require('../controllers/formaDeenvio/criandoFormadeenvio');

const deletandoUsuarioController = require('../controllers/usuario/deletandoUsuarioController');
const deletandoProdutoController = require('../controllers/produtos/deletandoProdutoController');
const deletandoFormadeenvioController = require('../controllers/formaDeenvio/deletandoFormadeenvio');

const pegandoUsuarioController = require('../controllers/usuario/pegandoUsuarioController');
const pegandoProdutoController = require('../controllers/produtos/pegandoProdutoController');
const pegandoFormadeenvioController = require('../controllers/formaDeenvio/pegandoFormadeenvio');

const usuarioRotas = express.Router();
const produtoRoute = express.Router();
const formasDeEnvioRoute = express.Router();

usuarioRotas.post("/usuario", criandousuarioController);
produtoRoute.post('/produtos', criandoProdutoController);
formasDeEnvioRoute.post("/formas-de-envio", criandoFormadeenvioController);

usuarioRotas.get('/usuario/infos', pegandoUsuarioController);
produtoRoute.get('/produtos', pegandoProdutoController);
formasDeEnvioRoute.get('/formas-de-envio', pegandoFormadeenvioController);

usuarioRotas.put('/usuario/:id', alterandoUsuarioController);
produtoRoute.put('/produtos/:id', alterandoProdutoController);
formasDeEnvioRoute.put('/formas-de-envio/:id', alterandoFormadeenvioController)

usuarioRotas.delete('/usuario', deletandoUsuarioController);
produtoRoute.delete('/produtos', deletandoProdutoController);
formasDeEnvioRoute.delete('/formas-de-envio', deletandoFormadeenvioController);

module.exports = {usuarioRotas, produtoRoute, formasDeEnvioRoute};
