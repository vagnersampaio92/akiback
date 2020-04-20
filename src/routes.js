const mongoose = require ('mongoose');
const express = require ('express');
const UserController = require('./controllers/UserController')
const AdminController = require('./controllers/AdminController')
const SessionController = require('./controllers/SessionController')
const SessionControllerAdmin = require('./controllers/SessionControllerAdmin')
const usuarioController = require('./controllers/usuarioController')
const SessionControllerAPP = require ('./controllers/SessionControllerAPP')
const CidadesController = require('./controllers/CidadesController')
const UsuarioenderecoController = require('./controllers/UsuarioenderecoController')
const EntregaController = require('./controllers/EntregaController')
const EntregaempresaController = require('./controllers/EntregaempresaController')


const auth = require('../src/app/middlewares/auth')

const routes = express.Router();

//entrega controller

routes.post('/entrega', EntregaController.store);
routes.post('/entregador', EntregaempresaController.store);
routes.post('/ultimo', EntregaempresaController.ultimo);
routes.post('/andamento', EntregaempresaController.andamento);
routes.post('/historico', EntregaempresaController.historico);
routes.post('/empresaentrega', EntregaempresaController.entrega);
routes.post('/aceito', EntregaempresaController.aceito);
routes.post('/concluido', EntregaempresaController.concluido);
routes.post('/entregaandamento', EntregaempresaController.entregaandamento);
routes.post('/historicoentregador', EntregaempresaController.historicoentregador);
routes.get('/listaempresa', EntregaempresaController.listaempresa);
routes.get('/listaentregador', EntregaempresaController.listaentregador);
routes.get('/listapagamentospedentes',EntregaempresaController.listapagamentospedentes)
routes.get('/listapagamentoentregadorpendente', EntregaempresaController.listapagamentoentregadorpendente)
routes.post('/concluidopagamentoentregador', EntregaempresaController.concluidopagamentoentregador);
routes.post('/concluidopagamentoempresa', EntregaempresaController.concluidopagamentoempresa);



//empresa
routes.post('/loginapp',SessionControllerAPP.store)
routes.post('/register', usuarioController.store);
routes.post('/address', UsuarioenderecoController.store);

routes.post('/cidades', CidadesController.store);
routes.get('/cities', CidadesController.index);
routes.get('/cities/:id', CidadesController.detalhe);

//admin
routes.post('/signupadmin', AdminController.store);
routes.post('/loginadmin',SessionControllerAdmin.store)

//entregador
routes.post('/loginprestador',SessionController.store)
routes.post('/signup', UserController.store);

routes.use(auth)






module.exports = routes;


