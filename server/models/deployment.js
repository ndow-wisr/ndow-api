'use strict';
module.exports = function(sequelize, DataTypes) {
  var Deployment = sequelize.define('Deployment', {
    animal_id: DataTypes.INTEGER,
    device_id: DataTypes.INTEGER,
    inservice: DataTypes.DATE,
    outservice: DataTypes.DATE
  }, {
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'deployments',
    classMethods: {
      associate: function(models) {
        Deployment.belongsTo(models.Device);
        Deployment.belongsTo(models.Animal);
      }
    }
  });
  return Deployment;
};
