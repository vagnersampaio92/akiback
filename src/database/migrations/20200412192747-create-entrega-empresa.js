'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('entregaempresas',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entrega_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      empresa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'usuarios',
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

      return queryInterface.dropTable('entregaempresas');
   
  }
};
