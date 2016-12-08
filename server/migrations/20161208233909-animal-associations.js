module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('animals', 'species_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      onDelete: 'SET NULL',
      references: { model: 'species', key: 'id' }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('animals', 'species_id', {
      type: Sequelize.INTEGER
    });
  }
};
