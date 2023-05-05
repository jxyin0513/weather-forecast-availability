'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HourlyWeathers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Cities'}
      },
      temperature: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      acTemp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      humidity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      starttime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      endtime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HourlyWeathers');
  }
};
