const {Usuario} = require('../app/models')

class UsuarioController{

    async store (req, res){
        console.log(req.body)
        const usuario = await Usuario.create(req.body)
        res.json(usuario);
    }

}

module.exports = new UsuarioController()