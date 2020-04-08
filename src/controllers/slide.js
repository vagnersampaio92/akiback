const mongoose = require ('mongoose');

const  slides = mongoose.model('vouconstruir');
module.exports = {

    async index(req, res){
         const slide = await slides.find();
        // return res.send("oi");

         return res.json(slide);
    },
    async show (req, res){
        const slide = await slides.findById(req.params.id);
        

         return res.json(slide);
    },
    async store(req,res){
            console.log("foi");
            const slide = await slides.create(req.body)

            return res.json(slide)
    },
    async update(req,res){
        const slide = await slides.findByIdAndUpdate(req.params.id, req.body,{new: true});
        

        return res.json(slide);

    },
    async destroy(req,res){
   await slides.findByIdAndRemove(req.params.id);

   return res.send()
        
    }
};