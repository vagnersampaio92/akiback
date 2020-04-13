const { entregaempresa, entrega, User } = require('../app/models')
const { Sequelize } = require('sequelize')
const Op = Sequelize.Op;

class EntregaempresaController {

    async store(req, res) {
        const ent = await entregaempresa.create(req.body)
        res.json(ent);
    }

    async ultimo(req, res) {
        console.log(req.body.id)

        const ent = await entregaempresa.findAll({
            where: {
                empresa_id: req.body.id
            }

        })

        const data = {}
        data.id = ent[ent.length - 1].entrega_id
        res.json(data);
    }
    async andamento(req, res) {
        console.log(req.body.id)
        const data = {}
        data.pedidos=[]
        const ent = await entrega.findAll({
            where: {
                empresa_id: req.body.id,
                status_entrega: {
                    [Op.ne]: "concluido"
                }

            }

        })

        for (let x = 0; x < ent.length; x++) {
           const data2={}
            data2.endereco = ent[x].endereco
            data2.valor = ent[x].valor
            data2.status_entrega = ent[x].status_entrega
            const entre=await User.findOne({
            where: {
                id:ent[x].entregador_id
              }

          })
          data2.entregador=entre.name
          
          data.pedidos=data.pedidos.concat(data2)
          console.log(data)

        }


        res.json(data);
    }



}

module.exports = new EntregaempresaController()