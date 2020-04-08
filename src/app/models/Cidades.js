module.exports = (sequelize, DataTypes) => {
    const Cidades = sequelize.define('Cidades',{
        cep:DataTypes.STRING,
        state:DataTypes.STRING,
        name:DataTypes.STRING,

    })

    return Cidades
}



 