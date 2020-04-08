module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria',{
        name:DataTypes.STRING,
        description:DataTypes.STRING,
        image:DataTypes.STRING
    })
 

  
    return Categoria
}