module.exports = (sequelize, DataTypes) => {
    const Usercategorias = sequelize.define('entregaempresa',{
        entrega_id: DataTypes.INTEGER,
        empresa_id: DataTypes.INTEGER

    },{})

    Usercategorias.associate = models =>{
        Usercategorias.belongsTo(models.User, { foreignKey: 'entrega_id'})
        Usercategorias.belongsTo(models.Usuario, { foreignKey: 'empresa_id'})
    }
    


  
    return Usercategorias
}