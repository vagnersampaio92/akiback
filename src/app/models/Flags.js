module.exports = (sequelize, DataTypes) => {
    const Flags = sequelize.define('Flags',{
        establishment_id: DataTypes.INTEGER,
         offer: DataTypes.INTEGER,
         popular: DataTypes.INTEGER,
         free_delivery: DataTypes.INTEGER
       
    },{})

    Flags.associate = models =>{
        Flags.belongsTo(models.User, { foreignKey: 'establishment_id'})
    }
    


  
    return Flags
}