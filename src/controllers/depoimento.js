const mongoose = require ('mongoose');

const  depoimentos= mongoose.model('depoimento');
module.exports = {

    async index(req, res){
         const depo = await depoimentos.find();
        // return res.send("oi");

         return res.json(depo);
    },
    async show (req, res){
        const depo = await depoimentos.findById(req.params.id);
        

         return res.json(depo);
    },
    async store(req,res){
            console.log("foi");
            const depo = await depoimentos.create(req.body)

            return res.json(depo)
    },
    async update(req,res){
        const depo = await depoimentos.findByIdAndUpdate(req.params.id, req.body,{new: true});
        

        return res.json(depo);

    },
    async destroy(req,res){
   await depoimentos.findByIdAndRemove(req.params.id);

   return res.send()
        
    }
};