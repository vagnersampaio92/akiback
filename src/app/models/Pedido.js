module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('pedido',{
      establishment_id: DataTypes.INTEGER,
        pagamento:DataTypes.STRING,
        min:DataTypes.STRING,
        max:DataTypes.STRING,
        status:DataTypes.STRING,
        price:DataTypes.STRING,
        endereco:DataTypes.STRING
    },{})

    Pedido.associate = models =>{
        Pedido.belongsTo(models.User, { foreignKey: 'establishment_id'})
    }
    


  
    return Pedido
}