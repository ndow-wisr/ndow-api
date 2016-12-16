'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('deployments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animal_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'animals',
          key: 'id'
        }
      },
      device_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'devices',
          key: 'id'
        }
      },
      inservice: {
        type: Sequelize.DATE
      },
      outservice: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('deployments');
  }
};
