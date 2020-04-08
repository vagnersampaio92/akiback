const {UsuarioEndereco} = require('../app/models')

class UsuarioenderecoController{

    async store (req, res){
       
       
        const flag = await UsuarioEndereco.findOne({where:{ user_id: req.body.user_id }})

    
        
        if(!flag){
           
            console.log(req.body)
            const endereco = await UsuarioEndereco.create(req.body)
            res.json(endereco);
            
        }else{
            const iduser=req.body.user_id
            const apaga = await UsuarioEndereco.destroy({where:{ user_id: req.body.user_id }})
            console.log(apaga)
            const endereco = await UsuarioEndereco.create(req.body)
           
            
            res.json(endereco);
            
        }

        // console.log(req.body)
        // const endereco = await UsuarioEndereco.create(req.body)
        // res.json(endereco);
    }

}

module.exports = new UsuarioenderecoController()