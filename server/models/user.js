module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      set: function(val) {
        this.setDataValue('username', val.toLowerCase());
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    user_level: {
      type: DataTypes.STRING,
      defaultValue: 'public',
      validate: {
        isIn: [['public', 'employee', 'admin', 'super']]
      }
    },
    division: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'users',
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Encounter);
      }
    }
  });
  return User;
};
