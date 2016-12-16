'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_id: {
        type: Sequelize.STRING
      },
      vendor: {
        type: Sequelize.TEXT
      },
      frequency: {
        type: Sequelize.REAL
      },
      device_type: {
        type: Sequelize.STRING
      },
      vhflot: {
        type: Sequelize.STRING
      },
      mfg_date: {
        type: Sequelize.DATEONLY
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
        type: Sequelize.Date
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('devices');
  }
};
