module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loc_name: {
        type: Sequelize.STRING(100)
      },
      loc_type: {
        type: Sequelize.STRING(35)
      },
      loc_easting: {
        type: Sequelize.REAL
      },
      loc_northing: {
        type: Sequelize.REAL
      },
      loc_lat: {
        type: Sequelize.REAL
      },
      loc_lon: {
        type: Sequelize.REAL
      },
      loc_accuracy: {
        type: Sequelize.REAL
      },
      loc_quality: {
        type: Sequelize.STRING(50)
      },
      loc_source: {
        type: Sequelize.STRING(50)
      },
      loc_mtn_range: {
        type: Sequelize.STRING(50)
      },
      loc_hunt_unit: {
        type: Sequelize.INTEGER
      },
      loc_mgmt_area: {
        type: Sequelize.INTEGER
      },
      loc_mgmt_unit: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('locations');
  }
};
