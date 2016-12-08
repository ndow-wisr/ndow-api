module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('encounters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animal_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: 'SET NULL',
        references: {
          model: 'animals',
          id: 'id'
        }
      },
      enc_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      age: {
        type: Sequelize.REAL
      },
      source_app: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      enc_method: {
        type: Sequelize.STRING(50)
      },
      enc_reason: {
        type: Sequelize.STRING(50)
      },
      capture_time: {
        type: Sequelize.TIME
      },
      start_handling: {
        type: Sequelize.TIME
      },
      end_handling: {
        type: Sequelize.TIME
      },
      comments: {
        type: Sequelize.TEXT
      },
      folder_url: {
        type: Sequelize.STRING
      },
      project_id: { // TODO: add relationship
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_id: { // TODO: add relationship
        type: Sequelize.INTEGER,
        allowNull: true
      },
      location_id: { // TODO: add relationship
        type: Sequelize.INTEGER,
        allowNull: true
      },
      rel_location_id: {
        type: Sequelize.INTEGER
      },
      reencounter: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      relocated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      marks: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      biometrics: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      vitals: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      injuries: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      medications: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      samples: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    return queryInterface.dropTable('encounters');
  }
};
