const {entrega} = require('../app/models')


class EntregaController{

    async store (req, res){
        const ent = await entrega.create(req.body)
        res.json(ent);
    }

}

module.exports = new EntregaController()