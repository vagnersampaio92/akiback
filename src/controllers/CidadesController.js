const {Cidades} = require('../app/models')

class CidadesController{

    async store (req, res){
        console.log(req.body)
      
        const cidade = await Cidades.create(req.body)
        res.json(cidade);
    }
    async index(req, res){
        const cidade = await Cidades.findAll();
       // return res.send("oi");

        return res.json(cidade);
   }
   async detalhe(req, res){
    const cidade = await Cidades.findOne({where:{id: req.params.id}});
   // return res.send("oi");

    return res.json(cidade);
}

}

module.exports = new CidadesController()





// const { Cidades } = require('../app/models')

// class CidadesController{

//     async store (req, res){
//         req.body=
//             {
//                 "cep":"96020000",
//                 "state":"RS",
//                 "name":"Pelotas"
            
//         }
        
//         console.log(req.body)
//         const cidade = await Cidades.create( req.body)
//         res.json(cidade);
//     }
   

// }

// module.exports = new CidadesController()