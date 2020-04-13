const {entregaempresa, entrega} = require('../app/models')
const { Sequelize } = require('sequelize')
const Op = Sequelize.Op;

class EntregaempresaController{

    async store (req, res){
        const ent = await entregaempresa.create(req.body)
        res.json(ent);
    }

    async ultimo (req, res){
        console.log(req.body.id)

        const ent = await entregaempresa.findAll({
            where: {
                empresa_id:req.body.id
              }
          
          })

          const data ={}
          data.id=ent[ent.length-1].entrega_id
        res.json(data);
    }
    async andamento (req, res){
        console.log(req.body.id)

        const ent = await entrega.findAll({
            where: {
                empresa_id:req.body.id,
                status_entrega:{
                    [Op.ne]: "concluido" 
                }
                
              }
          
          })

          
        res.json(ent);
    }



}

module.exports = new EntregaempresaController()