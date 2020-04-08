const { User, Flags, Categoria, Usercategorias, Usercartaos, cartaos, boost } = require('../app/models')

class EstablishmentController {

    async establishment(req, res) {
        const envio = {}
        const data = {}

        data.establishments = [];
        data.boosts = [];

        // const usercategorias = await Usercategorias.findAll({
        //     where: {

        //     },include: [User]
        //   });
        const restaurantes = await User.findAll();
        const cont = restaurantes.length
        for (let i = 0; i < cont; i++) {

            // data.establishments.restaurantes[i].categories
            const categories = await Usercategorias.findAll({
                where: {
                    user_id: restaurantes[i].id
                }
            });
            const cartoes = await Usercartaos.findAll({
                where: {
                    user_id: restaurantes[i].id
                }
            });


            restaurantes[i].dataValues.payment_methods = []

            for (let z = 0; z < cartoes.length; z++) {
                const card = await cartaos.findOne({ where: { id: cartoes[z].cartao_id } });

                restaurantes[i].dataValues.payment_methods = restaurantes[i].dataValues.payment_methods.concat(card)
            }

            restaurantes[i].dataValues.flags = await Flags.findOne({
                where: {
                    establishment_id: restaurantes[i].id
                }
            });
            // restaurantes[i].dataValues.categories=categories

            restaurantes[i].dataValues.categories = []

            for (let y = 0; y < categories.length; y++) {
                const cat = await Categoria.findOne({ where: { id: categories[y].categoria_id } });

                restaurantes[i].dataValues.categories = restaurantes[i].dataValues.categories.concat(cat)
            }
            // console.log(restaurantes[i])
            data.establishments = data.establishments.concat(restaurantes[i])
        }
        data.boosts = await boost.findAll();
        envio.data = data
        envio.count = cont

        return res.json(envio);
    }
}




module.exports = new EstablishmentController()



