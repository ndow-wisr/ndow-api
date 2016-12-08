module.exports = (sequelize, DataTypes) => {
  var Encounter = sequelize.define('Encounter', {
    animal_id: {
      type: DataTypes.INTEGER,
    },
    enc_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    age: {
      type: DataTypes.REAL
    }
    source: {
      type: DataTpes.STRING(50),
      allowNull: false
    },
    enc_method: {
      type: DataTypes.STRING(50)
    },
    enc_reason: {
      type: DataTypes.STRING(50)
    },
    capture_time: {
      type: DataTypes.TIME
    },
    start_handling: {
      type: DataTypes.Time
    },
    end_handling: {
      type: DataTypes.Time
    },
    comments: {
      type: DataTypes.TEXT
    },
    folder_url: {
      type: DataTypes.STRING
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER
      allowNull: false
    }
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rel_location_id: {
      type: DataTypes.INTEGER
    },
    reencounter: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    relocated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    marks: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    biometrics: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    vitals: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    injuries: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    medications: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    samples: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'encounters',
    classMethods: {
      associate: (models) => {
        Encounter.belongsTo(models.Animal, { onDelete: 'SET NULL' });
        Encounter.belongsTo(models.Project, { onDelete: 'SET NULL' });
        Encounter.belongsTo(models.Location, { onDelete: 'SET NULL' });
        Encounter.belongsTo(models.User, { onDelete: 'SET NULL' });
      }
    }
  });
  return Encounter;
};
