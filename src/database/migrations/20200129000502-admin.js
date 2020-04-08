'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log("opa")
    return queryInterface.createTable('admins',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        allownull:false,
        type: Sequelize.STRING
      },
      email:{
        allownull:false,
        type: Sequelize.STRING
      },
      password_hash:{
        allownull:false,
        type: Sequelize.STRING
      },
      created_at:{
        allowNull:false,
        type:Sequelize.DATE
      },
      updated_at:{
        allowNull:false,
        type:Sequelize.DATE
      }

      })
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('admins');
    
  }
};
