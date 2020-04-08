'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flags',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      offer:{
        allownull:false,
        type: Sequelize.STRING
      },
       popular:{
        allownull:false,
        type: Sequelize.STRING
      },
      free_delivery:{
        allownull:false,
        type: Sequelize.STRING
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

      return queryInterface.dropTable('flags');
    
  }
};
