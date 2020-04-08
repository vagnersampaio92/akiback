const {User, Flags, Categoria, Usercategorias, Usercartaos, cartaos, Pratos } = require('../app/models')

class UserController{

    async store (req, res){
        console.log(req.body)
        const user = await User.create(req.body)
        res.json(user);
    }
    async establishment(req, res) {
        const envio = {}
        const data = {}

        data.establishments = [];
      

        // const usercategorias = await Usercategorias.findAll({
        //     where: {

        //     },include: [User]
        //   });
        const restaurantes = await User.findAll({
            where:{
                id: req.params.id
            }
        });
        console.log(restaurantes[0].id)
            // data.establishments.restaurantes[i].categories
            const categories = await Usercategorias.findAll({
                where: {
                    user_id: restaurantes[0].id
                }
            });
          
            const cartoes = await Usercartaos.findAll({
                where: {
                    user_id: restaurantes[0].id
                }
            });


            restaurantes[0].dataValues.payment_methods = []

            for (let z = 0; z < cartoes.length; z++) {
                const card = await cartaos.findOne({ where: { id: cartoes[z].cartao_id } });

                restaurantes[0].dataValues.payment_methods = restaurantes[0].dataValues.payment_methods.concat(card)
            }

            restaurantes[0].dataValues.flags = await Flags.findOne({
                where: {
                    establishment_id: restaurantes[0].id
                }
            });
            // restaurantes[i].dataValues.categories=categories

            restaurantes[0].dataValues.categories = []

            for (let y = 0; y < categories.length; y++) {
                const cat = await Categoria.findOne({ where: { id: categories[y].categoria_id } });

                restaurantes[0].dataValues.categories = restaurantes[0].dataValues.categories.concat(cat)
            }
            // console.log(restaurantes[i])
            // data.establishments = data.establishments.concat(restaurantes[0])
            // restaurantes[0].dataValues.flags.products 
           const pratos = await Pratos.findAll({
                where: {
                    establishment_id: restaurantes[0].id
                }
            });
            restaurantes[0].dataValues.products={}
            restaurantes[0].dataValues.products.data=pratos
            restaurantes[0].dataValues.products.count=pratos.length
           
            data.establishments = data.establishments.concat(restaurantes[0])



        envio.data = data
        // envio.count = cont

        return res.json(envio);
    }

}

module.exports = new UserController()