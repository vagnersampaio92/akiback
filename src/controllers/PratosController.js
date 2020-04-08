const {Pratos} = require('../app/models')

class PratosController{

    async store (req, res){
        console.log(req.body)
      
        const prato = await Pratos.create(req.body)
        res.json(prato);
    }
    async index(req, res){
        const prato = await Pratos.findAll();
       // return res.send("oi");

        return res.json(prato);
   }
   async lista(req, res){
   console.log(req.params.id)
    const prato = await Pratos.findAll(
        {
            where: {
                establishment_id: req.params.id
            }
        }
    );
   // return res.send("oi");

    return res.json(prato);
}

}

module.exports = new PratosController()