const {Categoria} = require('../app/models')

class CategoriaController{

    async store (req, res){
        
        const categoria = await Categoria.create(req.body)
        res.json(categoria);
    }
    async index(req, res){
        const categoria = await Categoria.findAll();
       // return res.send("oi");

        return res.json(categoria);
   }

}

module.exports = new CategoriaController()