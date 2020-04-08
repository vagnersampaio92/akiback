const { Usuario } = require('../app/models')


class SessionController{
    async create(req, res){

    }

    async store(req, res){
        const { email, password } = req.body
        const usuario = await Usuario.findOne({where: {email}})
        if(!usuario){
            console.log('usuário não encontrado')
            const codigo = 404
            return res.status(404).json({error:'login invalido'})
        }
        if(!await usuario.checkPassword(password)){
            console.log('senha incorreta')
            const codigo = 404
            return res.status(404).json({error:'login invalido'})
        }
        req.session.usuario= usuario
        console.log('login feito')
        const codigo = 200
        
        return res.json({usuario, token:usuario.generation(email) })

    }
}
module.exports=new SessionController()