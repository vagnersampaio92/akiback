module.exports = (sequelize, DataTypes) => {
    const Usercartaos = sequelize.define('Usercartaos',{
        user_id: DataTypes.INTEGER,
        cartao_id: DataTypes.INTEGER

    },{})

    Usercartaos.associate = models =>{
        Usercartaos.belongsTo(models.User, { foreignKey: 'user_id'})
        Usercartaos.belongsTo(models.cartaos, { foreignKey: 'cartao_id'})
    }
    


  
    return Usercartaos
}




// module.exports = (sequelize, DataTypes) => {
//     const Usercategorias = sequelize.define('Usercategorias',{
//         user_id: DataTypes.INTEGER,
//         categoria_id: DataTypes.INTEGER

//     },{})

//     Usercategorias.associate = models =>{
//         Usercategorias.belongsTo(models.User, { foreignKey: 'user_id'})
//         Usercategorias.belongsTo(models.Categoria, { foreignKey: 'categoria_id'})
//     }
    


  
//     return Usercategorias
// }