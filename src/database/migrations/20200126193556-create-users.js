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
      rg:{
        allownull:false,
        type: Sequelize.STRING
      },
      cnh:{
        allownull:false,
        type: Sequelize.STRING
      },
      cpf:{
        allownull:false,
        type: Sequelize.STRING
      },
      bairropreferido:{
        allownull:false,
        type: Sequelize.STRING
      },
      cnpj:{
        allownull:false,
        type: Sequelize.STRING
      }, 
      inscricaiestadual:{
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
