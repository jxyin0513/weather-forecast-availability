'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
   return queryInterface.bulkInsert('HourlyWeathers', [
      {
        cityId:'1',
        temperature:'55',
        acTemp:'50',
        humidity:'40',
        status:'Mostly Clear',
        starttime:'1:00:00',
        endtime: '2:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'50',
        acTemp:'50',
        humidity:'40',
        status:'Mostly Clear',
        starttime:'2:00:00',
        endtime: '3:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'55',
        acTemp:'50',
        humidity:'40',
        status:'Mostly Clear',
        starttime:'3:00:00',
        endtime: '4:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'50',
        acTemp:'50',
        humidity:'40',
        status:'Clear',
        starttime:'4:00:00',
        endtime: '5:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'58',
        acTemp:'51',
        humidity:'40',
        status:'Mostly Clear',
        starttime:'5:00:00',
        endtime: '6:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'60',
        acTemp:'60',
        humidity:'40',
        status:'Mostly Clear',
        starttime:'6:00:00',
        endtime: '7:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'63',
        acTemp:'60',
        humidity:'40',
        status:'Mostly Clear',
        starttime:'7:00:00',
        endtime: '8:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'65',
        acTemp:'60',
        humidity:'40',
        status:'Clear',
        starttime:'8:00:00',
        endtime: '9:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'65',
        acTemp:'60',
        humidity:'40',
        status:'Mostly Clear',
        starttime:'9:00:00',
        endtime: '10:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'67',
        acTemp:'63',
        humidity:'40',
        status:'Sunny',
        starttime:'10:00:00',
        endtime: '11:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'67',
        acTemp:'65',
        humidity:'40',
        status:'Clear',
        starttime:'11:00:00',
        endtime: '12:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'65',
        acTemp:'60',
        humidity:'40',
        status:'Mostly Sunny',
        starttime:'12:00:00',
        endtime: '13:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'65',
        acTemp:'60',
        humidity:'40',
        status:'Clear',
        starttime:'13:00:00',
        endtime: '14:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'63',
        acTemp:'60',
        humidity:'40',
        status:'Mostly Sunny',
        starttime:'14:00:00',
        endtime: '15:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cityId:'1',
        temperature:'65',
        acTemp:'60',
        humidity:'40',
        status:'Partly Sunny',
        starttime:'15:00:00',
        endtime: '16:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      cityId:'1',
      temperature:'65',
      acTemp:'60',
      humidity:'40',
      status:'Partly Sunny',
      starttime:'15:00:00',
      endtime: '16:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      cityId:'1',
      temperature:'6',
      acTemp:'54',
      humidity:'50',
      status:'Cloudy',
      starttime:'16:00:00',
      endtime: '17:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      cityId:'1',
      temperature:'65',
      acTemp:'60',
      humidity:'40',
      status:'Partly Sunny',
      starttime:'17:00:00',
      endtime: '18:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId:'1',
      temperature:'65',
      acTemp:'60',
      humidity:'40',
      status:'Partly Cloudy',
      starttime:'18:00:00',
      endtime: '19:00:00',
      createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      cityId:'1',
      temperature:'65',
      acTemp:'60',
      humidity:'40',
      status:'Partly Cloudy',
      starttime:'19:00:00',
      endtime: '20:00:00',
      createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      cityId:'1',
      temperature:'65',
      acTemp:'60',
      humidity:'40',
      status:'Partly Cloudy',
      starttime:'20:00:00',
      endtime: '21:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId:'1',
      temperature:'65',
      acTemp:'60',
      humidity:'40',
      status:'Partly Cloudy',
      starttime:'21:00:00',
      endtime: '22:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId:'1',
      temperature:'65',
      acTemp:'60',
      humidity:'40',
      status:'Partly Cloudy',
      starttime:'22:00:00',
      endtime: '23:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cityId:'1',
      temperature:'65',
      acTemp:'60',
      humidity:'40',
      status:'Partly Cloudy',
      starttime:'23:00:00',
      endtime: '24:00:00',
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
   return queryInterface.bulkDelete('HourlyWeathers', null, {});
  }
};
