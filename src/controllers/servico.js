const mongoose = require ('mongoose');

const  servicos = mongoose.model('servico');
module.exports = {

    async index(req, res){
         const servico = await servicos.find();
        // return res.send("oi");

         return res.json(servico);
    },
    async show (req, res){
        const servico = await servicos.findById(req.params.id);
        

         return res.json(servico);
    },
    async store(req,res){
            console.log("foi");
            const servico = await servicos.create(req.body)

            return res.json(servico)
    },
    async update(req,res){
        const servico = await servicos.findByIdAndUpdate(req.params.id, req.body,{new: true});
        

        return res.json(servico);

    },
    async destroy(req,res){
   await servicos.findByIdAndRemove(req.params.id);

   return res.send()
        
    }
};