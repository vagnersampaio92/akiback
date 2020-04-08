'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
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
      banner:{
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
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'cidades',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      min_order_price: {
        type: Sequelize.INTEGER
      },
      delivery_price: {
        type: Sequelize.INTEGER
      },
      min_delivery_minutes: {
        type: Sequelize.INTEGER
        
      },
      max_delivery_minutes: {
        type: Sequelize.INTEGER
      
      },
      description:{
      
        type: Sequelize.STRING
      },
      status:{
       
        type: Sequelize.STRING
      },
      delivery_option:{
      
        type: Sequelize.STRING
      },
      logo:{
      
        type: Sequelize.STRING
      },
      rating:{
        
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
  
      return queryInterface.dropTable('users');
    
  }
};
