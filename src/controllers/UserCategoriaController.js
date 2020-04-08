const {Usercategorias} = require('../app/models')

class UserCategoriaController{

    async store (req, res){
        
        const userCategoriaController = await Usercategorias.create(req.body)
        res.json(userCategoriaController);
    }
    async lista(req, res){
        const usercategorias = await Usercategorias.findAll({
            where: {
                categoria_id:8
            }
          });
       // return res.send("oi");

        return res.json(usercategorias);
   }

}

module.exports = new UserCategoriaController()