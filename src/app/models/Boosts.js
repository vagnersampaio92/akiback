module.exports = (sequelize, DataTypes) => {
    const Boosts = sequelize.define('boost',{
        name:DataTypes.STRING,
        description:DataTypes.STRING,
        banner:DataTypes.STRING,
        logo:DataTypes.STRING,
       
    })
 

  
    return Boosts
}