'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pratos',{
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
        allownull:false,
        type: Sequelize.STRING
      },
      photo_url:{
        allownull:false,
        type: Sequelize.STRING
      },
      price:{
        allownull:false,
        type: Sequelize.INTEGER
      },
      establishment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
  
      return queryInterface.dropTable('pratos');
    
  }
};
