module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('abundances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      n_female: {
        type: Sequelize.INTEGER
      },
      n_male: {
        type: Sequelize.INTEGER
      },
      n_unk_sex: {
        type: Sequelize.INTEGER
      },
      n_adult: {
        type: Sequelize.INTEGER
      },
      n_young: {
        type: Sequelize.INTEGER
      },
      n_sex_unk: {
        type: Sequelize.INTEGER
      },
      sex_total: {
        type: Sequelize.INTEGER
      },
      age_total: {
        type: Sequelize.INTEGER
      },
      n_total: {
        type: Sequelize.INTEGER
      },
      young_age_class: {
        type: Sequelize.STRING(50)
      },
      encounter_id: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'encounters',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('abundances');
  }
};
