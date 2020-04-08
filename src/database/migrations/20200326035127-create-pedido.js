'use strict';
      
module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('pedidos',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pagamento:{
        allownull:false,
        type: Sequelize.STRING
      },
      min:{
        
        type: Sequelize.STRING
      },
      max:{
        
        type: Sequelize.STRING
      },
      status:{
        allownull:false,
        type: Sequelize.STRING
      },
      price:{
        allownull:false,
        type: Sequelize.STRING
      },
      endereco:{
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

      return queryInterface.dropTable('pedido');

  }
};
