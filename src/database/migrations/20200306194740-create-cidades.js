'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cidades',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cep:{
        allownull:false,
        type: Sequelize.STRING
      },
      state:{
        allownull:false,
        type: Sequelize.STRING
      },
      name:{
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
   
      return queryInterface.dropTable('cidades');
    
  }
};
