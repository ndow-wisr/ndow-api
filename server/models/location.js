module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    loc_name: DataTypes.STRING,
    loc_type: DataTypes.STRING,
    loc_easting: DataTypes.REAL,
    loc_northing: DataTypes.REAL,
    loc_lat: {
      type: DataTypes.REAL,
      allowNull: true,
      validate: { min: -90, max: 90 }
    },
    loc_lon: {
      type: DataTypes.REAL,
      allowNull: true,
      validate: { min: -180, max: 180 }
    },
    loc_accuracy: DataTypes.REAL,
    loc_quality: DataTypes.STRING,
    loc_source: DataTypes.STRING,
    loc_mtn_range: DataTypes.STRING,
    loc_hunt_unit: DataTypes.INTEGER,
    loc_mgmt_area: DataTypes.INTEGER,
    loc_mgmt_unit: DataTypes.STRING
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'locations',
    classMethods: {
      associate: (models) => {
        Location.hasMany(models.Encounter);
      }
    }
  });
  return Location;
};
