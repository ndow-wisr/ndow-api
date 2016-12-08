module.exports = (sequelize, DataTypes) => {
  var Species = sequelize.define('Species', {
    common_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    binomial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subspecies: DataTypes.STRING,
    taxo_class: DataTypes.STRING,
    eng_class: DataTypes.STRING,
    eng_subclass: DataTypes.STRING,
    fgn_code: DataTypes.INTEGER,
    state_status: DataTypes.STRING,
    sensitive: DataTypes.BOOLEAN,
    sensitive_rationale: DataTypes.STRING
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'species',
    classMethods: {
      associate: function(models) {
        Species.hasMany(models.Animal);
      }
    }
  });
  return Species;
};
