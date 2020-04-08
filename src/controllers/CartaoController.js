const {Cartao} = require('../app/models')

class CartaoController{

    async store (req, res){
        
        const cartao = await Cartao.create(req.body)
        res.json(cartao);
    }
    async index(req, res){
        const cartao = await Cartao.findAll();
       // return res.send("oi");

        return res.json(cartao);
   }

}

module.exports = new CartaoController()