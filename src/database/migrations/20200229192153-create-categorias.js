'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categoria',{
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
      description:{
       
        type: Sequelize.STRING
      },
      image:{
        
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
    return queryInterface.dropTable('categoria');
  }
};

