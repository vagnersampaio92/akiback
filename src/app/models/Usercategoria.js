module.exports = (sequelize, DataTypes) => {
    const Usercategorias = sequelize.define('Usercategorias',{
        user_id: DataTypes.INTEGER,
        categoria_id: DataTypes.INTEGER

    },{})

    Usercategorias.associate = models =>{
        Usercategorias.belongsTo(models.User, { foreignKey: 'user_id'})
        Usercategorias.belongsTo(models.Categoria, { foreignKey: 'categoria_id'})
    }
    


  
    return Usercategorias
}