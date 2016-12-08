module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      },
      set: val => {
        this.setDataValue('username', val.toLowerCase());
      }
    }
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        isEmail: true
      }
    },
    user_level: {
      type: DataTypes.STRING,
      defaultValue: 'public',
      validate: {
        notNull: true,
        isIn: [['public', 'employee', 'admin', 'super']]
      }
    },
    division: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
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
