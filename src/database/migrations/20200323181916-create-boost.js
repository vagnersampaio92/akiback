'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('boots',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.STRING
      },
      banner:{
        type: Sequelize.STRING
      },
      logo:{
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

      return queryInterface.dropTable('boots');
    
  }
};

