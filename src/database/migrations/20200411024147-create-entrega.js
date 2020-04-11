'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('entrega',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      endereco:{
        allownull:false,
        type: Sequelize.STRING
      },
      valor:{
        allownull:false,
        type: Sequelize.STRING
      },
      status_entrega:{
        allownull:false,
        type: Sequelize.STRING
      },
      status_pagamento_entregador:{
        allownull:false,
        type: Sequelize.STRING
      },
      status_pagamento_empresa:{
        allownull:false,
        type: Sequelize.STRING
      },
    
      entregador_id: {
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
  
      return queryInterface.dropTable('entrega');
    
  }
};
