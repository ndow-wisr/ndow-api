'use strict';
module.exports = function(sequelize, DataTypes) {
  var Device = sequelize.define('Device', {
    device_id: DataTypes.STRING,
    vendor: DataTypes.TEXT,
    frequency: DataTypes.REAL,
    device_type: DataTypes.STRING,
    vhflot: DataTypes.STRING,
    mfg_date: DataTypes.DATEONLY
  }, {
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'devices',
    classMethods: {
      associate: function(models) {
        Device.hasMany(models.Deployment);
      }
    }
  });
  return Device;
};
