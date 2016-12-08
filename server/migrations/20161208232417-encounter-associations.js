module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.changeColumn('encounters', 'project_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: 'SET NULL',
        references: { model: 'projects', key: 'id' }
      })
      .then(queryInterface.changeColumn('encounters', 'user_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: 'SET NULL',
        references: { model: 'users', key: 'id' }
      }))
      .then(queryInterface.changeColumn('encounters', 'location_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: 'SET NULL',
        references: { model: 'locations', key: 'id' }
      }));
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('encounters', 'project_id', {
      type: Sequelize.INTEGER
    })
    .then(queryInterface.changeColumn('encounters', 'user_id', {
      type: Sequelize.INTEGER
    }))
    .then(queryInterface.changeColumn('encounters', 'location_id', {
      type: Sequelize.INTEGER
    }));
  }
};
