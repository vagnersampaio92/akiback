module.exports = (sequelize, DataTypes) => {
    const Entrega = sequelize.define('entrega',{
    entregador_id: DataTypes.INTEGER,
    empresa_id: DataTypes.INTEGER,
    endereco:DataTypes.STRING,
    valor:DataTypes.STRING,
    status_entrega:DataTypes.STRING,
    status_pagamento_entregador:DataTypes.STRING,
    status_pagamento_empresa:DataTypes.STRING
    },{})

    Entrega.associate = models =>{
        Entrega.belongsTo(models.User, { foreignKey: 'entregador_id'})
        Entrega.belongsTo(models.Usuario, { foreignKey: 'empresa_id'})
    }
    


  
    return Entrega
}