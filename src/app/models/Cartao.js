module.exports = (sequelize, DataTypes) => {
    const Cartao = sequelize.define('cartaos',{
        name:DataTypes.STRING,
       
    })
 

  
    return Cartao
}