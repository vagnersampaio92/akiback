const { Admin } = require('../app/models')


class SessionControllerAdmin{
    async create(req, res){

    }

    async store(req, res){
        const { email, password } = req.body
        const admin = await Admin.findOne({where: {email}})
        if(!admin){
            console.log('usuário não encontrado')
            const codigo = 404
            return res.json(codigo)
        }
        if(!await admin.checkPassword(password)){
            console.log('senha incorreta')
            const codigo = 404
            return res.json(codigo)
        }
        req.session.admin= admin
        console.log('login feito')
        const codigo = 200
        
        return res.json({admin, token:admin.generation(email) })

    }
}
module.exports=new SessionControllerAdmin()