module.exports = (sequelize, DataTypes) => {
  var Abundance = sequelize.define('Abundance', {
    n_female: DataTypes.INTEGER,
    n_male: DataTypes.INTEGER,
    n_unk_sex: DataTypes.INTEGER,
    n_adult: DataTypes.INTEGER,
    n_young: DataTypes.INTEGER,
    n_sex_unk: DataTypes.INTEGER,
    sex_total: DataTypes.INTEGER,
    age_total: DataTypes.INTEGER,
    n_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    young_age_class: DataTypes.STRING(50),
    encounter_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'abundances',
    classMethods: {
      associate: function(models) {
        Abundance.belongsTo(models.Encounter, { onDelete: 'SET NULL' })
      }
    }
  });
  return Abundance;
};
