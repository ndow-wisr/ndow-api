module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('species', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      common_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      binomial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subspecies: {
        type: Sequelize.STRING
      },
      taxo_class: {
        type: Sequelize.STRING
      },
      eng_class: {
        type: Sequelize.STRING
      },
      eng_subclass: {
        type: Sequelize.STRING
      },
      fgn_code: {
        type: Sequelize.INTEGER
      },
      state_status: {
        type: Sequelize.STRING
      },
      sensitive: {
        type: Sequelize.BOOLEAN
      },
      sensitive_rationale: {
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
    return queryInterface.dropTable('species');
  }
};
