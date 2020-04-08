const {Admin} = require('../app/models')

class AdminController{

    async store (req, res){
      
        const admin = await Admin.create(req.body)
        res.json(admin);
    }

}

module.exports = new AdminController()