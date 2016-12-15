'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('telemetry', {
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
        type: Sequelize.INTEGER
      },
      acq_time: {
        type: Sequelize.DATE
      },
      longitude: {
        type: Sequelize.DOUBLE
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      easting: {
        type: Sequelize.INTEGER
      },
      northing: {
        type: Sequelize.INTEGER
      },
      zone: {
        type: Sequelize.INTEGER
      },
      altitude: {
        type: Sequelize.REAL
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
    return queryInterface.dropTable('telemetry');
  }
};
