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



//categoria
// const CategoriaController = require('./controllers/CategoriaController')
// const UserCategoriaController = require('./controllers/UserCategoriaController')
// const slide= require('./controllers/slide')
// const depoimento= require('./controllers/depoimento')
// const PratosController = require('./controllers/PratosController')
// const CartaoController = require('./controllers/CartaoController')
// const EstablishmentController = require('./controllers/EstablishmentController')
// const BoostsController = require('./controllers/BoostsController')
// const PedidoController = require ('./controllers/PedidoController')




// routes.get('/establishment',EstablishmentController.establishment)
// routes.post('/cartao',CartaoController.store);
// routes.get('/cartao', CartaoController.index);
// routes.post('/establishment/boosts',BoostsController.store);
// routes.get('/establishment/boosts', BoostsController.index);
// routes.post('/pedido',PedidoController.store);
// routes.get('/status/:id',PedidoController.status);
// routes.get('/establishment/:id', UserController.establishment);
// routes.post('/usercat', UserCategoriaController.store);
// routes.get('/lista', UserCategoriaController.lista);
// routes.get('/teste',auth,(req,res) => res.json({ok: true}))
//todas as rotas abaixo precisam de token de acesso
// routes.post('/pratos', PratosController.store);
// routes.get('/establishment/produtos/:id', PratosController.lista);
// routes.get('/slide', slide.index);
// routes.get('/categoria', CategoriaController.index);
// routes.get('/depoimento', depoimento.index);
// routes.post('/categoria', CategoriaController.store);

// routes.get('/slide/:id', slide.show);
// routes.put('/slide/:id', slide.update);
// routes.delete('/slide/:id', slide.destroy);
// routes.post('/slide', slide.store);

// routes.get('/depoimento/:id', depoimento.show);
// routes.put('/depoimento/:id', depoimento.update);
// routes.delete('/depoimento/:id', depoimento.destroy);
// routes.post('/depoimento', depoimento.store);

// routes.get('/categoria', categoria.index);
// routes.get('/categoria/:id', categoria.show);
// routes.put('/categoria/:id', categoria.update);
// routes.delete('/categoria/:id', categoria.destroy);
// routes.post('/categoria', categoria.store);

// routes.get('/prestador', prestador.index);
// routes.get('/prestador/:id', prestador.show);
// routes.put('/prestador/:id', prestador.update);
// routes.delete('/prestador/:id', prestador.destroy);
// routes.post('/prestador', prestador.store);

// routes.get('/servico', servico.index);
// routes.get('/servico/:id', servico.show);
// routes.put('/servico/:id', servico.update);
// routes.delete('/servico/:id', servico.destroy);
// routes.post('/servico', servico.store);


module.exports = routes;


