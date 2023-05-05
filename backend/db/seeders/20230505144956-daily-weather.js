'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
   return queryInterface.bulkInsert('DailyWeathers', [
    {
      cityId: 1,
      calendar_date:'2023-05-06',
      status: 'Cloudy',
      minTemp: 50,
      maxTemp: 60,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-07',
      status: 'Sunny',
      minTemp: 53,
      maxTemp: 66,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 43,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-08',
      status: 'Mostly Sunny',
      minTemp: 55,
      maxTemp: 67,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-09',
      status: 'Mostly Cloudy',
      minTemp: 50,
      maxTemp: 60,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 53,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-10',
      status: 'Partly Sunny',
      minTemp: 53,
      maxTemp: 62,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 55,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-11',
      status: 'Mostly Cloudy',
      minTemp: 50,
      maxTemp: 60,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 57,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-12',
      status: 'Cloudy',
      minTemp: 50,
      maxTemp: 58,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 63,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-13',
      status: 'Mostly Sunny',
      minTemp: 55,
      maxTemp: 63,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 60,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-14',
      status: 'Cloudy',
      minTemp: 51,
      maxTemp: 62,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 55,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId: 1,
      calendar_date:'2023-05-15',
      status: 'Mostly Sunny',
      minTemp: 53,
      maxTemp: 69,
      sunrise: '06:35:00',
      sunset: '18:48:00',
      humidity: 58,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
   return queryInterface.bulkDelete('DailyWeathers', null, {});
  }
};
