const { entregaempresa, entrega, User, Usuario } = require('../app/models')
const  Sequelize  = require('sequelize')
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
    async historico(req, res) {
        console.log(req.body.id)
        const data = {}
        data.pedidos=[]
        const ent = await entrega.findAll({
            where: {
                empresa_id: req.body.id,
           

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
        
          data2.ano=ent[x].createdAt.getFullYear()
          data2.mes=ent[x].createdAt.getMonth()
          data2.dia=ent[x].createdAt.getDate()
          data2.hora=ent[x].createdAt.getHours()
          data2.minuto=ent[x].createdAt.getMinutes()

          data2.status_pagamento_empresa=ent[x].status_pagamento_empresa
          data.pedidos=data.pedidos.concat(data2)
          console.log(data)

        }


        res.json(data);
    }
    async entrega(req, res) {
        console.log(req.body.id)
        const data = {}
        data.pedidos=[]
        const ent = await entrega.findAll({
            where: {
                entregador_id: req.body.id,
                status_entrega: {
                    // [Op.ne]:[{ "concluido" }, {"aceito"}]
                    [Op.and]:[
                        {[Op.ne]:"concluido"} ,
                        {[Op.ne]:"aceito" }
                ]
                   
                }

            }

        })
        console.log(ent)
        for (let x = 0; x < ent.length; x++) {
           const data2={}
            data2.endereco = ent[x].endereco
            data2.valor = ent[x].valor
            data2.id=ent[x].id
            data2.status_entrega = ent[x].status_entrega
            const entre=await Usuario.findOne({
            where: {
                id:ent[x].empresa_id
              }

          })
          data2.empresa=entre.name
          data2.phone=entre.phone
          data2.address=entre.address
          data.pedidos=data.pedidos.concat(data2)
        //   console.log(data)

        }


        res.json(data);
    }
    async aceito(req, res) {
        console.log(req.body.id)
        
        const ent = await entrega.update(
            {status_entrega:"aceito"},
            {where: {
                id: req.body.id,
               

            }})

        res.json(ent);
    }
    async concluido(req, res) {
        console.log(req.body.id)
        
        const ent = await entrega.update(
            {status_entrega:"concluido"},
            {where: {
                id: req.body.id,
               

            }})

        res.json(ent);
    }
    async entregaandamento(req, res) {
        console.log(req.body.id)
        const data = {}
        data.pedidos=[]
        const ent = await entrega.findAll({
            where: {
                entregador_id: req.body.id,
                status_entrega:"aceito"

            }

        })
        console.log(ent)
        for (let x = 0; x < ent.length; x++) {
           const data2={}
            data2.endereco = ent[x].endereco
            data2.valor = ent[x].valor
            data2.id=ent[x].id
            data2.status_entrega = ent[x].status_entrega
            const entre=await Usuario.findOne({
            where: {
                id:ent[x].empresa_id
              }

          })
          data2.empresa=entre.name
          data2.phone=entre.phone
          data2.address=entre.address
          data.pedidos=data.pedidos.concat(data2)
        //   console.log(data)

        }


        res.json(data);
    }
    async historicoentregador(req, res) {
        console.log(req.body.id)
        const data = {}
        data.pedidos=[]
        const ent = await entrega.findAll({
            where: {
                entregador_id: req.body.id,
           

            }

        })

        for (let x = 0; x < ent.length; x++) {
           const data2={}
            data2.endereco = ent[x].endereco
            data2.valor = ent[x].valor
            data2.status_entrega = ent[x].status_entrega
            const entre=await Usuario.findOne({
            where: {
                id:ent[x].empresa_id
              }

          })
          data2.empresa=entre.name
        
          data2.ano=ent[x].createdAt.getFullYear()
          data2.mes=ent[x].createdAt.getMonth()
          data2.dia=ent[x].createdAt.getDate()
          data2.hora=ent[x].createdAt.getHours()
          data2.minuto=ent[x].createdAt.getMinutes()

          data2.status_pagamento_empresa=ent[x].status_pagamento_empresa
          data.pedidos=data.pedidos.concat(data2)
          console.log(data)

        }
        


        res.json(data);
    }
    async listaempresa(req, res) {
        const ent = await Usuario.findAll({
      

        })
      

        res.json(ent );
    }    
    async listaentregador(req, res) {
        const ent = await User.findAll({
      

        })
      

        res.json(ent );
    }  
    async listapagamentospedentes(req, res) {
        const ent = await entrega.findAll({
      
            where: {
               
                status_pagamento_empresa: {
                    [Op.ne]: "concluido"
                }

            }
        })
      

        res.json(ent );
    }  
    async listapagamentoentregadorpendente(req, res) {
        const ent = await entrega.findAll({
      
            where: {
               
                status_pagamento_entregador: {
                    [Op.ne]: "concluido"
                }

            }
        })
      

        res.json(ent );
    } 
    async concluidopagamentoempresa(req, res) {
        console.log(req.body.id)
        
        const ent = await entrega.update(
            {status_pagamento_empresa:"concluido"},
            {where: {
                id: req.body.id,
               

            }})

        res.json(ent);
    }
    async concluidopagamentoentregador(req, res) {
        console.log(req.body.id)
        
        const ent = await entrega.update(
            {status_pagamento_entregador:"concluido"},
            {where: {
                id: req.body.id,
               

            }})

        res.json(ent);
    }
    async associacao(req, res) {
        
        const empresa= await Usuario.findAll({
          
        })
        const data = {}
        data.lista=[]
        for(let x=0; x<empresa.length; x++){
            const data2={}
            const ent = await entregaempresa.findAll({
                where: {
                    empresa_id: empresa[x].id
                }
    
            })
        
           const idultimo = ent[ent.length - 1].entrega_id
            const nome = await User.findOne({
                where: {
                    id: idultimo
                }
    
            })

            data2.empresa=empresa[x].name
            data2.entrega=nome.name;
            data.lista=data.lista.concat(data2)
        }

       
        res.json(data);
    }
    async ordenadata7(req, res){
        const ent = await entrega.findAll({
      
            where: {
                empresa_id: req.body.id,
                [Sequelize.Op.and]: [
                    Sequelize.literal(`created_at > NOW() - INTERVAL '168h'`),
                  ],
                status_pagamento_empresa: {
                    
                    [Op.ne]: "concluido"
                }

            },
            order:[['created_at', 'DESC']]
        })

        // const d = sequelize.literal('CURRENT_TIMESTAMP')
      
        // console.log(d)
        res.json(ent );;
    }
    async ordenadata15(req, res){
        const ent = await entrega.findAll({
      
            where: {
                empresa_id: req.body.id,
                [Sequelize.Op.and]: [
                    Sequelize.literal(`created_at > NOW() - INTERVAL '360h'`),
                  ],
                status_pagamento_empresa: {
                    
                    [Op.ne]: "concluido"
                }

            },
            order:[['created_at', 'DESC']]
        })

        // const d = sequelize.literal('CURRENT_TIMESTAMP')
      
        // console.log(d)
        res.json(ent );;
    }
    async ordenadata30(req, res){
        const ent = await entrega.findAll({
      
            where: {
                empresa_id: req.body.id,
                [Sequelize.Op.and]: [
                    Sequelize.literal(`created_at > NOW() - INTERVAL '720h'`),
                  ],
                status_pagamento_empresa: {
                    
                    [Op.ne]: "concluido"
                }

            },
            order:[['created_at', 'DESC']]
        })

        // const d = sequelize.literal('CURRENT_TIMESTAMP')
      
        // console.log(d)
        res.json(ent );;
    }
    async ordenadata7entrega(req, res){
        const ent = await entrega.findAll({
      
            where: {
                entregador_id: req.body.id,
                [Sequelize.Op.and]: [
                    Sequelize.literal(`created_at > NOW() - INTERVAL '168h'`),
                  ],
                status_pagamento_entregador: {
                    
                    [Op.ne]: "concluido"
                }

            },
            order:[['created_at', 'DESC']]
        })

        // const d = sequelize.literal('CURRENT_TIMESTAMP')
      
        // console.log(d)
        res.json(ent );;
    }
    async ordenadata15entrega(req, res){
        const ent = await entrega.findAll({
      
            where: {
                entregador_id: req.body.id,
                [Sequelize.Op.and]: [
                    Sequelize.literal(`created_at > NOW() - INTERVAL '360h'`),
                  ],
                  status_pagamento_entregador: {
                    
                    [Op.ne]: "concluido"
                }

            },
            order:[['created_at', 'DESC']]
        })

        // const d = sequelize.literal('CURRENT_TIMESTAMP')
      
        // console.log(d)
        res.json(ent );;
    }
    async ordenadata30entrega(req, res){
        const ent = await entrega.findAll({
      
            where: {
                entregador_id: req.body.id,
                [Sequelize.Op.and]: [
                    Sequelize.literal(`created_at > NOW() - INTERVAL '720h'`),
                  ],
                  status_pagamento_entregador: {
                    
                    [Op.ne]: "concluido"
                }

            },
            order:[['created_at', 'DESC']]
        })

        // const d = sequelize.literal('CURRENT_TIMESTAMP')
      
        // console.log(d)
        res.json(ent );;
    }
    async listaconcluidopagamentoempresa(req, res) {
        
        
        for(let x=0; x<req.body.data.length; x++){
            console.log(req.body.data[x].id)

        const ent = await entrega.update(
            {status_pagamento_empresa:"concluido"},
            {where: {
                id:req.body.data[x].id
               

            }})
        }

    }
    async listaconcluidopagamentoentregador(req, res) {

        for(let x=0; x<req.body.data.length; x++){
            console.log(req.body.data[x].id)

        const ent = await entrega.update(
            {status_pagamento_entregador:"concluido"},
            {where: {
                id:req.body.data[x].id
               

            }})
        }

    }


}

module.exports = new EntregaempresaController()