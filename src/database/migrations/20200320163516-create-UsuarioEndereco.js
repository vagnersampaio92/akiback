'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario_enderecos',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address:{
        allownull:false,
        type: Sequelize.STRING
      },      
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'Usuario',
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
   
      return queryInterface.dropTable('usuarioendereco');
    
  }
};
