'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DailyWeathers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Cities'}
      },
      calendar_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      minTemp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      maxTemp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sunrise: {
        allowNull: false,
        type: Sequelize.TIME
      },
      sunset: {
        allowNull: false,
        type: Sequelize.TIME
      },
      humidity: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('DailyWeathers');
  }
};
