module.exports = (sequelize, DataTypes) => {
    const Usercategorias = sequelize.define('UsuarioEndereco',{
        user_id: DataTypes.INTEGER,
        address: DataTypes.STRING

    },{})

    Usercategorias.associate = models =>{
        Usercategorias.belongsTo(models.Usuario, { foreignKey: 'user_id'})
        
    }
    


  
    return Usercategorias
}