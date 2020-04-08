const { User } = require('../app/models')


class SessionController{
    async create(req, res){

    }

    async store(req, res){
        const { email, password } = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            console.log('usuário não encontrado')
            const codigo = 404
            return res.json(codigo)
        }
        if(!await user.checkPassword(password)){
            console.log('senha incorreta')
            const codigo = 404
            return res.json(codigo)
        }
        req.session.user= user
        console.log('login feito')
        const codigo = 200
        
        return res.json({user, token:user.generation(email) })

    }
}
module.exports=new SessionController()