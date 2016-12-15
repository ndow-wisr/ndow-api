'use strict';
module.exports = function(sequelize, DataTypes) {
  var Telemetry = sequelize.define('Telemetry', {
    animal_id: DataTypes.INTEGER,
    device_id: DataTypes.INTEGER,
    acq_time: DataTypes.DATE,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    easting: DataTypes.INTEGER,
    northing: DataTypes.INTEGER,
    zone: DataTypes.INTEGER,
    altitude: DataTypes.REAL
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'telemetry',
    classMethods: {
      associate: function(models) {
        Telemetry.belongsTo(models.Animal);
      }
    }
  });
  return Telemetry;
};
