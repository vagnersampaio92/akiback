const {boost} = require('../app/models')

class BoostsController{

    async store (req, res){
        
        const boosts = await boost.create(req.body)
        res.json(boosts);
    }
    async index(req, res){
        const boosts = await boost.findAll();
       // return res.send("oi");

        return res.json(boosts);
   }

}

module.exports = new BoostsController()