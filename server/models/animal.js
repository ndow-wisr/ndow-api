module.exports = (sequelize, DataTypes) => {
  var Animal = sequelize.define('Animal', {
    element_id: DataTypes.STRING(100),
    species_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sex: DataTypes.STRING(15),
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'animals',
    classMethods: {
      associate: (models) => {
        Animal.hasMany(models.Encounter);
        Animal.belongsTo(models.Species, { onDelete: 'SET NULL' });
      }
    }
  });
  return Animal;
};
