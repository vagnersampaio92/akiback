'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios',{
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
      phone:{
        allownull:false,
        type: Sequelize.STRING
      },
      address:{
        allownull:false,
        type: Sequelize.STRING
      },
      email:{
        allownull:false,
        type: Sequelize.STRING
      },
      razao:{
        allownull:false,
        type: Sequelize.STRING
      },
      cnpj:{
        allownull:false,
        type: Sequelize.STRING
      },
      iestaduall:{
        allownull:false,
        type: Sequelize.STRING
      },
      contatoresponsavel:{
        allownull:false,
        type: Sequelize.STRING
      },
      telefoneresponsavel:{
        allownull:false,
        type: Sequelize.STRING
      },
      filial:{
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
  
      return queryInterface.dropTable('Usuario');
    
  }
};
