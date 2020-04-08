const {Pratos, pedido, PratosPedidos} = require('../app/models')

class PratosController{

    async store (req, res){
        
        const pedidoobj={}
        pedidoobj.establishment_id=req.body.establishment_id
        pedidoobj.pagamento=req.body.pagamento
        pedidoobj.min=''
        pedidoobj.max=''
        pedidoobj.status=req.body.status
        pedidoobj.price=req.body.price
        pedidoobj.endereco=req.body.endereco
        console.log(pedidoobj)
        
         const ped = await pedido.create(req.body)
  
    
        // prato_id: DataTypes.INTEGER,
        const tamanho = req.body.pratos.length
        console.log(tamanho)
         for(let x=0;x<tamanho;x++){
            const prato={}
           prato.prato_id=req.body.pratos[x]
           prato.pedido_id=ped.id
           console.log(prato)
           const pra = await PratosPedidos.create(prato)
         }
         const data ={}
         data.id=ped.id
        res.json(data);







    }
    async index(req, res){
        const prato = await Pratos.findAll();
       // return res.send("oi");

        return res.json(prato);
   }
   async status(req, res){
   console.log(req.params.id)
    const ped = await pedido.findAll(
        {
            where: {
                id: req.params.id
            }
        }
    );
   // return res.send("oi");
        
    return res.json(ped);
}

}

module.exports = new PratosController()