module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(35)
      },
      first_name: {
        type: Sequelize.STRING(35)
      },
      last_name: {
        type: Sequelize.STRING(35)
      },
      email: {
        type: Sequelize.STRING(100)
      },
      user_level: {
        type: Sequelize.STRING(25),
        defaultValue: 'public'
      },
      division: {
        type: Sequelize.STRING(25)
      },
      password: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('users');
  }
};
