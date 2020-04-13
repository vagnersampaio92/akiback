const bcrypt = require('bcryptjs')
const  jwt=require ('jsonwebtoken')



module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Usuario',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        phone:DataTypes.STRING,
        address:DataTypes.STRING,
        password:DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING

    },{
        hooks:{
            beforeSave: async user =>{
                if(user.password){
                    user.password_hash= await bcrypt.hash(user.password,8)
                }
            }
        }
    })
    // WorkingDay.associate = function(models) {
    //     WorkingDay.belongsToMany(models.User, {through: 'UsersWorkingDays', foreignKey: 'workingDayId', as: 'employes'})
    //   };

    // User.associate = function(models){
    //     User.belongsToMany(models.Categoria, {through: 'Usercategoria'})
    // }
    // User.associate = (models) =>{
    //     User.belongsTo(models.Usercategoria, { foreignKey: 'usercategoria_id'})
    // }


    User.prototype.checkPassword = function (password){
        return bcrypt.compare(password,this.password_hash)
    }
    User.prototype.generation = function (email){

      return jwt.sign({email},process.env.SECRET,{
          expiresIn: 86400
      })
    }
    return User
}