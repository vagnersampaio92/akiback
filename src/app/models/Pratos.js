module.exports = (sequelize, DataTypes) => {
    const Pratos = sequelize.define('Pratos',{
        establishment_id: DataTypes.INTEGER,
        name:DataTypes.STRING,
        description:DataTypes.STRING,
        photo_url:DataTypes.STRING,
        price:DataTypes.INTEGER
    },{})

    Pratos.associate = models =>{
        Pratos.belongsTo(models.User, { foreignKey: 'establishment_id'})
    }
    


  
    return Pratos
}