const mongoose = require ('mongoose');
const express = require ('express');
const slide= require('./controllers/slide')
const depoimento= require('./controllers/depoimento')

const UserController = require('./controllers/UserController')
const AdminController = require('./controllers/AdminController')
const CategoriaController = require('./controllers/CategoriaController')
const SessionController = require('./controllers/SessionController')
const SessionControllerAdmin = require('./controllers/SessionControllerAdmin')
const UserCategoriaController = require('./controllers/UserCategoriaController')
const usuarioController = require('./controllers/usuarioController')
const SessionControllerAPP = require ('./controllers/SessionControllerAPP')
const CidadesController = require('./controllers/CidadesController')
const PratosController = require('./controllers/PratosController')
const UsuarioenderecoController = require('./controllers/UsuarioenderecoController')
const CartaoController = require('./controllers/CartaoController')
const EstablishmentController = require('./controllers/EstablishmentController')
const BoostsController = require('./controllers/BoostsController')
const PedidoController = require ('./controllers/PedidoController')


const auth = require('../src/app/middlewares/auth')

const routes = express.Router();

routes.get('/establishment',EstablishmentController.establishment)

routes.post('/cartao',CartaoController.store);
routes.get('/cartao', CartaoController.index);

routes.post('/establishment/boosts',BoostsController.store);
routes.get('/establishment/boosts', BoostsController.index);

routes.post('/pedido',PedidoController.store);
routes.get('/status/:id',PedidoController.status);

routes.get('/establishment/:id', UserController.establishment);


routes.post('/loginapp',SessionControllerAPP.store)
routes.post('/register', usuarioController.store);
routes.post('/address', UsuarioenderecoController.store);

routes.post('/cidades', CidadesController.store);
routes.get('/cities', CidadesController.index);
routes.get('/cities/:id', CidadesController.detalhe);

routes.post('/pratos', PratosController.store);
routes.get('/establishment/produtos/:id', PratosController.lista);

routes.get('/slide', slide.index);
routes.get('/categoria', CategoriaController.index);


routes.get('/depoimento', depoimento.index);




routes.post('/signupadmin', AdminController.store);

routes.post('/usercat', UserCategoriaController.store);
routes.get('/lista', UserCategoriaController.lista);


routes.post('/loginadmin',SessionControllerAdmin.store)


routes.post('/loginprestador',SessionController.store)





//categoria



// routes.get('/teste',auth,(req,res) => res.json({ok: true}))
//todas as rotas abaixo precisam de token de acesso

routes.use(auth)

routes.post('/categoria', CategoriaController.store);




routes.post('/signup', UserController.store);









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


