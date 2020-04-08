const bcrypt = require('bcryptjs')
const  jwt=require ('jsonwebtoken')



module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING

    },{
        hooks:{
            beforeSave: async admin =>{
                if(admin.password){
                    admin.password_hash= await bcrypt.hash(admin.password,8)
                }
            }
        }
    })
    Admin.prototype.checkPassword = function (password){
        return bcrypt.compare(password,this.password_hash)
    }
    Admin.prototype.generation = function (email){

      return jwt.sign({email},process.env.SECRET,{
          expiresIn: 86400
      })
    }
    return Admin
}