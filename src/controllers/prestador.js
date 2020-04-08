const mongoose = require ('mongoose');
const request = require('request');

const  prestadores = mongoose.model('prestador');

module.exports = {

    async index(req, res){
         const prestadore = await prestadores.find();
        // return res.send("oi");

         return res.json(prestadore);
    },
    async show (req, res){
        const prestadore = await prestadores.findById(req.params.id);
        

         return res.json(prestadore);
    },
    async store(req,res){
            console.log("foi");
            const prestador = await prestadores.create(req.body)

           // linkador(prestador)
              
            return res.json(prestador)
    },
    async update(req,res){
        const prestadore = await prestadores.findByIdAndUpdate(req.params.id, req.body,{new: true});
        

        return res.json(prestadore);

    },
    async destroy(req,res){
   await prestadores.findByIdAndRemove(req.params.id);

   return res.send()
        
    }
};

const linkador= async function(prestador){
    const  categorias = mongoose.model('categoria');
    console.log(prestador)
   const body={
          "prestadores":[
              {
                  "id":" 5e1db2aee8ac31076e6740c2"
              }
              ]
      
   }
//    routes.put('/categoria/:id', categoria.update);
//    const link ={ id: '5e1debe947f071025dc7b854' }
//     const categoria = await categorias.findByIdAndUpdate(link, body,{new: true});
       
    // async update(req,res){
    //     const categoria = await categorias.findByIdAndUpdate('5e1debe947f071025dc7b854',body,{new: true});
    //     return res.json(categoria);

    // }
    

}

