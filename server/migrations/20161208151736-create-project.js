module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      proj_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      proj_desc: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      proj_species: {
        type: Sequelize.STRING
      },
      proj_loc: {
        type: Sequelize.STRING(100)
      },
      proj_status: {
        type: Sequelize.STRING(35)
      },
      proj_division: {
        type: Sequelize.STRING(25)
      },
      proj_start: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      proj_end: {
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('projects');
  }
};
