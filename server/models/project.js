module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    proj_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    proj_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proj_species: DataTypes.STRING,
    proj_loc: DataTypes.STRING,
    proj_status: DataTypes.STRING,
    proj_division: DataTypes.STRING,
    proj_start: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    proj_end: {
      type: DataTypes.DATEONLY
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'projects',
    classMethods: {
      associate: (models) => {
        Project.hasMany(models.Encounter);
      }
    }
  });
  return Project;
};
