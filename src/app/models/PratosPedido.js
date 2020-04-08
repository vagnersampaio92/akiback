module.exports = (sequelize, DataTypes) => {
    const PratosPedidos = sequelize.define('PratosPedidos', {
        pedido_id: DataTypes.INTEGER,
        prato_id: DataTypes.INTEGER,

    }, {})

    PratosPedidos.associate = models => {
        PratosPedidos.belongsTo(models.pedido, { foreignKey: 'pedido_id' })
        PratosPedidos.belongsTo(models.Pratos, { foreignKey: 'prato_id' })
    }




    return PratosPedidos
}